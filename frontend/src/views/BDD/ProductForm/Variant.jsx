import React, { useState, useEffect } from "react";
import UploadImage from "../../../components/UploadImage/UploadImage";
import { IoIosArrowDown } from "react-icons/io";
import thumbnailConvert from "../../../utils/convertThumbnail";
const Variant = ({
  handleChangeVariantImg,
  handleDeleteImage,
  handleChangeVariantName,
  handleDeleteVariant,
  cat,
  vari,
  handleSizes,
  variants,
}) => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (cat) {
      setCategory(cat);
    }
  }, [cat]);

  const [uploadImg, setUploadImg] = useState(false);

  const handleCloseUpload = () => {
    uploadImg(false);
  };

  return (
    <div className="">
      <div
        className="bg-red-500 w-10 text-white text center text-xl flex justify-center cursor-pointer"
        onClick={() => handleDeleteVariant(vari.id)}
      >
        -
      </div>
      <input
        type="text"
        name="variant"
        id="variant"
        onChange={(e) => handleChangeVariantName(vari.id, e.target.value)}
        value={vari.variant}
        autocomplete="brand"
        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="variant"
      />
      <div className="flex">
        {vari.imgUrl
          ? vari.imgUrl?.map((img, index) => (
              <div key={index} className="w-24 relative">
                <img className="" src={thumbnailConvert(img)} />
                <div
                  onClick={() => handleDeleteImage(index, vari.id)}
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
        className="w-1/5 flex items-center justify-center underline cursor-pointer "
      >
        <p className="w-">Cargar imagen</p>
        <IoIosArrowDown className={`${uploadImg ? "rotate-180" : ""} duration-300`} />
      </div>
      {uploadImg ? (
        <UploadImage
          handleUploadImageVariant={handleChangeVariantImg}
          id={vari.id}
          handleCloseUpload={handleCloseUpload}
        />
      ) : (
        ""
      )}
      {category === "Botines" && (
        "Lol"
      )}
      {category === "Camisetas" && (
       "Lol"
      )}
      {category !== "Botines" && cat !== "Camisetas" && (
        "Lol"
      )}
    </div>
  );
};

export default Variant;
