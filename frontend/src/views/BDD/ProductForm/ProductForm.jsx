import React, { useState } from "react";
import axios from "axios";
import UploadImage from "../../../components/UploadImage/UploadImage";
import { IoIosArrowDown } from "react-icons/io";

const ProductForm = () => {
  const [uploadImg, setUploadImg] = useState(false);
  const [variants, setVariants] = useState([
    { variant: "", id: 1, sizes: [], imgUrl: [] },
  ]);
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({
    productName: "",
    type: "", 
    images: [],
    year: "",
    surface: "",
    description: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
  };


  const handleChangeVariantImg = (img, variantId) => {
    setForm(prevForm => ({
      ...prevForm,
      images: [...prevForm.images, img]
    }));
    setImages(prevImages => [...prevImages, img]);
  };

  const handleDeleteImage = (index) => {
    setForm(prevForm => ({
      ...prevForm,
      images: prevForm.images.filter((_, i) => i !== index)
    }));
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://saksa-production.up.railway.app/products",
        form
      );

      // Verifica si la solicitud fue exitosa
      if (response.status === 200 || response.status === 201) {
        alert("Producto Agregado Exitosamente");
        setForm({
          productName: "",
          price: 0,
          brand: "",
          cat: "",
          color: "",

          description: "",
        });
        window.location.href = "http://localhost:3000/propiedades-bdd";
      } else {
        console.error("Error al agregar el producto.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  const handleCloseUpload = () => {
    uploadImg(false);
  };
  return (
    <form class="px-4 md:px-8 max-w-3xl mx-auto py-12" onSubmit={handleSubmit}>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Nueva Propiedad
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Esta información va a ser publica, porfavor revisar bien las
            casillas antes de publicar.
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="productName"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre de la Propiedad
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    type="text"
                    name="productName"
                    id="productName"
                    onChange={handleChange}
                    value={form.productName}
                    autocomplete="productName"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-4">
              <label
                htmlFor="type"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Categoría
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <select
                    name="type"
                    id="type"
                    onChange={handleChange}
                    value={form.type}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                  >
                    <option value="">Seleccione una categoría</option>
                    <option value="Edificios de altura">Edificios de altura</option>
                    <option value="Salud Publica">Salud Pública</option>
                    <option value="Domesticos">Domésticos</option>
                    <option value="Otros">Otros</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                for="year"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Edad
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    type="text"
                    name="year"
                    id="year"
                    onChange={handleChange}
                    value={form.year}
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                for="surface"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Superficie
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    type="text"
                    name="surface"
                    id="surface"
                    onChange={handleChange}
                    value={form.surface}
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                
                  />
                </div>
              </div>
            </div>


            <div class="sm:col-span-3">
              <p>Imagenes</p>
              <div className="flex">
                {images
                  ? images?.map((img, index) => (
                      <div key={index} className="w-24 relative">
                        <img className="" src={img} />
                        <div
                          onClick={() => handleDeleteImage(index)}
                          className="absolute top-0 right-0 cursor-pointer opacity-70 hover:opacity-100"
                        >
                          X
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
              <div
                onClick={() => setUploadImg(!uploadImg)}
                className="w-2/5 flex items-center justify-center underline cursor-pointer text-blue-700"
              >
                <p className="text-left">Cargar imagen</p>
                <IoIosArrowDown
                  className={`${uploadImg ? "rotate-180" : ""} duration-300`}
                />
              </div>
              {uploadImg ? (
                <UploadImage
                  handleUploadImageVariant={handleChangeVariantImg}
                  id={1}
                  handleCloseUpload={handleCloseUpload}
                />
              ) : (
                ""
              )}
            </div>

            <div class="col-span-full">
              <label
                for="description"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Descripción
              </label>
              <div class="mt-2">
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows="3"
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              
            </div>
            {/* <UploadImage handleUploadImage={handleUploadImage} /> */}
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <a
          href="/producttable"
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </a>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
