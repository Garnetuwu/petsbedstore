import Image from "next/image";

const PreviewImage = ({ src, alt, onChangeDisplay, selectedImage }) => {
  const focusedImage = selectedImage === src;

  return (
    <li>
      <button onClick={onChangeDisplay}>
        <Image
          src={src}
          alt={alt}
          width={170}
          height={170}
          className={`aspect-square object-cover max-h-[170px] ${
            focusedImage ? null : "opacity-50"
          }`}
        />
      </button>
    </li>
  );
};

export default PreviewImage;
