"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Loader } from "lucide-react"
import compressImage from "../../utils/compressImage"

const options = [
  { value: "todos", label: "TODOS", type: 0 },
  { value: "salud", label: "SALUD/BIENESTAR", type: 1 },
  { value: "oficinas", label: "OFICINAS/COMERCIAL", type: 2 },
  { value: "viviendas", label: "VIVIENDAS UNIFAMILIARES", type: 3 },
  { value: "altura", label: "OBRAS EN ALTURA", type: 4 },
  { value: "otros", label: "OTROS PROYECTOS", type: 5 },
  { value: "diseños", label: "DISEÑOS", type: 6 },
]

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [preloadedImages, setPreloadedImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Preload all images when the modal opens
  useEffect(() => {
    if (!project) return

    setIsLoading(true)
    setCurrentImageIndex(0)
    setPreloadedImages([])

    // Function to preload a single image
    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const compressedSrc = compressImage(src)
        const img = new Image()
        img.src = compressedSrc
        img.onload = () => resolve(compressedSrc)
        img.onerror = () => resolve(null) // Handle loading errors
      })
    }

    // Track loading progress
    let loaded = 0
    const totalImages = project.img.length

    // Preload all images in parallel
    const promises = project.img.map((src) =>
      preloadImage(src).then((compressedSrc) => {
        loaded++
        setLoadingProgress(Math.round((loaded / totalImages) * 100))
        return compressedSrc
      }),
    )

    Promise.all(promises).then((loadedImages) => {
      setPreloadedImages(loadedImages.filter(Boolean))
      setIsLoading(false)
    })

    // Setup escape key handler
    const handleEscKey = (e) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscKey)

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [project, onClose])

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === preloadedImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? preloadedImages.length - 1 : prev - 1))
  }

  const getProjectTypeLabel = (type) => {
    const option = options.find((opt) => opt.value === type)
    return option ? option.label : type
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] mx-auto flex flex-col p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 text-white hover:text-gray-300 z-10"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>

        {/* Content container */}
        <div className="w-full h-full flex flex-col">
          {/* Project title */}
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-2">{project.name}</h1>

          {/* Main content area */}
          <div className="flex-1 relative min-h-0 mb-2">
            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 z-20">
                <Loader className="w-10 h-10 text-white animate-spin mb-2" />
                <p className="text-white text-sm">{`Cargando imágenes... ${loadingProgress}%`}</p>
              </div>
            )}

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 disabled:opacity-50"
              aria-label="Previous image"
              disabled={isLoading}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 disabled:opacity-50"
              aria-label="Next image"
              disabled={isLoading}
            >
              <ChevronRight size={24} />
            </button>

            {/* Image container */}
            <div className="w-full h-full flex items-center justify-center">
              {preloadedImages.length > 0 && (
                <img
                  src={preloadedImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.name} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>

            {/* Image counter */}
            {!isLoading && preloadedImages.length > 0 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {preloadedImages.length}
              </div>
            )}
          </div>

          {/* Project info */}
          <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-2 text-sm md:text-base">
            {project.type && (
              <p>
                <span className="text-gray-400">Tipo:</span> {getProjectTypeLabel(project.type)}
              </p>
            )}
            {project.year && (
              <p>
                <span className="text-gray-400">Año:</span> {project.year.replace("Año: ", "")}
              </p>
            )}
            {project.surface && (
              <p>
                <span className="text-gray-400">Superficie:</span> {project.surface}
              </p>
            )}
          </div>
          {project.description && <p className="text-white text-sm md:text-base mt-2">{project.description}</p>}
        </div>
      </div>
    </div>
  )
}

