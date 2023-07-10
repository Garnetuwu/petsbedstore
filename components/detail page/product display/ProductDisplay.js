import { useState } from "react";
import ProductPreview from "./ProductPreview";
import Image from "next/image";

const ProductDisplay = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const setImageHandler = (imageURL) => {
    setSelectedImage(imageURL);
  };

  return (
    <div className="flex flex-col gap-3 py-3">
      <Image
        width={1600}
        height={650}
        src={selectedImage}
        alt="main image"
        className=" object-cover aspect-square max-h-[650px]"
      />
      {images.length > 1 && (
        <ProductPreview
          onSetImage={setImageHandler}
          images={images}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
};

export default ProductDisplay;
