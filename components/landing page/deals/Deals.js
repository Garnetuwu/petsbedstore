import Button from "../../UI/Button";
import DealItem from "./DealItem";
import Card from "@/components/UI/Card";

const Deals = () => {
  return (
    <Card className="p-10 bg-nude">
      <div className="mac:container grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 h-[400px] tablet:h-[200px] gap-3">
        <div className="flex flex-col gap-3 px-5 items-center tablet:items-start place-self-center">
          <h2>Get a great deal today!</h2>
          <p className="pb-2">
            Use code Friend4Life at checkout for 15% off your order
          </p>
          <Button className="hover:buttonFill">Shop now</Button>
        </div>
        <DealItem image={1}>Free deliveries on orders over $50</DealItem>
        <DealItem image={2} className="visible max-desktop:hidden">
          Get an adorable Dalmation plush on orders over $100
        </DealItem>
      </div>
    </Card>
  );
};

export default Deals;
