import Image from "next/image";
import moon from "@/public/assets/moon.png";
import star from "@/public/assets/star.png";

export const Star = ({ className }) => {
  return (
    <Image
      src={star}
      className={`absolute scale-75 ${className}`}
      alt="star asset"
    />
  );
};

export const Moon = ({ className }) => {
  return (
    <Image
      src={moon}
      className={`absolute scale-75 ${className}`}
      alt="moon asset"
    />
  );
};
