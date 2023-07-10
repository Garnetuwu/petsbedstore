import Card from "../../UI/Card";
import GridCard from "../../UI/GridCard";
import SummaryItem from "./SummaryItem";
import Image from "next/image";

const SummaryDescription = [
  {
    title: "Unmatched durability!",
    image: "big_dog",
    cartoon: "cartoon_durability",
    description:
      "Tried and tested by our very naughty dalmatian to ensure strong durability and a long life",
    button: "Learn more",
    buttonLink: "/shop",
  },
  {
    title: "Perfect comfort!",
    image: "cat_on_couch",
    cartoon: "cartoon_comfy",
    description:
      "Customize colour, texture and add a name plate to perfectly suit your pet's specific need ",
    button: "Customize",
    buttonLink: "/shop",
  },
  {
    title: "For all sizes!",
    image: "small_dog",
    cartoon: "cartoon_size",
    description:
      "Too big! Too small! Just right! Built to your specific dimensions so no matter how big or small your furry friend is, our beds will be a perfect fit!",
    button: "Shop now",
    buttonLink: "/shop",
  },
];

const Summary = () => {
  return (
    <Card className="flex flex-col gap-8 max-tablet:gap-3 pt-5">
      {SummaryDescription.map((sum, index) => (
        <SummaryItem
          index={index}
          key={sum.title}
          title={sum.title}
          image={sum.image}
          cartoon={sum.cartoon}
          description={sum.description}
          button={sum.button}
          buttonLink={sum.buttonLink}
        />
      ))}
      <GridCard className="max-tablet:grid-cols-1 bg-blue ">
        <div className="flex flex-col gap-5 p-10 text-white text-center items-center max-tablet:pb-0">
          <h2 className="font-semibold">Pick from a range of materials!</h2>
          <p className="max-tablet:w-[70%] desktop:w-[60%]">
            From wool to wicker! Pets can be very picky and all have different
            taste for comfort! That is why our beds can be made out of all kinds
            of natural materials!
          </p>
        </div>
        <Image
          width={700}
          height={350}
          className="max-tablet:scale-[80%] max-tablet:rounded-lg tablet:w-full tablet:h-[350px] object-cover"
          src="/images/fabrics.png"
          alt="image of materials"
        />
      </GridCard>
    </Card>
  );
};

export default Summary;
