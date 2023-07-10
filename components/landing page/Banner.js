import { useRouter } from "next/router";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Banner = () => {
  const router = useRouter();
  return (
    <Card className="bg-nude flex max-tablet:flex-col max-tablet:gap-7 overflow-hidden">
      <div className="max-w-[664px] p-3 tablet:p-7 flex flex-col justify-center items-center">
        <h1 className="text-center font-bold px-5 max-tablet:pt-5 desktop:px-10 ">
          Luxurious Beds For Your Fluffy Friends!
        </h1>
        <p className="py-5 text-center px-10 desktop:px-20">
          Each bed is made to order! pick and choose from materials, to colours
          & styles. We can even build custom structures to fit your home!
        </p>
        <div className="flex flex-col space-y-5 tablet:flex-row tablet:space-y-0 tablet:space-x-10">
          <Button
            className="font-medium hover:buttonFill"
            onClick={() => {
              router.push("/shop");
            }}
          >
            shop now
          </Button>
          <Button className="font-medium hover:buttonFill">customize</Button>
        </div>
      </div>
      <div className="w-[1300px] h-[550px] max-tablet:w-full bg-cover bg-center bg-banner" />
    </Card>
  );
};

export default Banner;
