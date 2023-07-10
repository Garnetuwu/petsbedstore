import { useState } from "react";
import Button from "../UI/Button";
import { useRouter } from "next/router";
import Image from "next/image";

const CategoryButton = ({
  buttonClass,
  children,
  src,
  hoverClass,
  address,
  name,
}) => {
  const [isShown, setIsShown] = useState(false);
  const router = useRouter();

  const buttonClickHandler = () => {
    router.push(`shop/${address}`);
  };
  return (
    <button
      className={`${buttonClass} w-full h-[475px] bg-black max-tablet:relative`}
      onClick={buttonClickHandler}
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => {
        setIsShown(false);
      }}
    >
      {isShown && (
        <div
          className={`absolute z-10 w-full h-full flex flex-col justify-center items-center tablet:w-[45%] px-8 font-medium ${hoverClass}`}
        >
          <p className="text-center">{children}</p>
          <Button className="mt-5 hover:buttonFillInvert hover:animatedColor">
            Shop more
          </Button>
        </div>
      )}
      <Image
        width={1600}
        height={475}
        className={`object-cover w-full h-[475px] ${
          isShown ? "opacity-50" : "opacity-100"
        }`}
        src={src}
        alt={`category of ${name}`}
      />
    </button>
  );
};

export default CategoryButton;
