import Button from "../../UI/Button";
import Image from "next/image";
import FeatureCard from "@/components/UI/FeatureCard";
import { useRouter } from "next/router";

const SummaryItem = ({
  title,
  description,
  image,
  cartoon,
  index,
  button,
  buttonLink,
}) => {
  const oddImage = index % 2 !== 0;

  const router = useRouter();

  return (
    <FeatureCard>
      <Image
        width={700}
        height={350}
        className={`visible max-tablet:hidden object-cover h-[350px] w-full rounded-md ${
          oddImage ? "order-2" : null
        }`}
        src={`/images/${image}.jpg`}
        alt={"pet bed image"}
      />
      <div
        className={`flex flex-col gap-3 p-10 relative max-tablet:items-center max-tablet:text-center ${
          oddImage ? "items-end text-right" : "items-start"
        }`}
      >
        <Image
          width={260}
          height={260}
          className={`max-tablet:relative max-tablet:w-[260px] w-[150px] mac:w-[200px] absolute bottom-2 ${
            oddImage ? "tablet:left-5" : "tablet:right-5"
          }`}
          src={`/images/${cartoon}.png`}
          alt="cartoon image"
        />
        <h2 className="font-semibold">{title}</h2>
        <p className="w-[65%] pb-2">{description}</p>
        <Button
          className="hover:buttonFill"
          onClick={() => {
            router.push(buttonLink);
          }}
        >
          {button}
        </Button>
      </div>
    </FeatureCard>
  );
};

export default SummaryItem;
