import Button from "../UI/Button";
import Card from "../UI/Card";

const Banner = () => {
  return (
    <Card className="bg-nude flex max-tablet:flex-col max-tablet:gap-7 overflow-hidden">
      <div className="max-w-[664px] p-3 tablet:p-7 flex flex-col justify-center items-center">
        <h1 className="text-center px-5 max-tablet:pt-5 desktop:px-10 ">
          Luxurious Beds Only Designed For Your Fluffy Friends
        </h1>
        <p className="py-5 text-center px-10 desktop:px-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempo Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempo
        </p>
        <div className="flex flex-col space-y-5 tablet:flex-row tablet:space-y-0 tablet:space-x-10">
          <Button className="font-medium ">shop now</Button>
          <Button className="font-medium ">customize</Button>
        </div>
      </div>
      <div className="w-[1074px] h-[550px] max-tablet:w-full bg-cover bg-center bg-dog-banner" />
    </Card>
  );
};

export default Banner;
