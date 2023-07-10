import CustomSwiper from "@/components/UI/CustomSwiper";
import PreviewImage from "./PreviewImage";

const ProductPreview = ({ onSetImage, images, selectedImage }) => {
  return (
    <CustomSwiper
      slidesPerView={5}
      spaceBetween={10}
      dataLength={images.length}
    >
      {images.map((image, index) => (
        <swiper-slide
          key={index}
          class="aspect-square object-cover max-h-[170px]"
        >
          <PreviewImage
            src={image}
            alt={`sub image`}
            onChangeDisplay={() => onSetImage(image)}
            selectedImage={selectedImage}
          />
        </swiper-slide>
      ))}
    </CustomSwiper>
  );
};

export default ProductPreview;
