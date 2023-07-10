import Button from "../UI/Button";
import Container from "../UI/Container";
import Image from "next/image";

const CustomCategory = () => {
  return (
    <Container className="mt-8">
      <div className="bg-gray flex flex-row rounded-sm overflow-hidden max-tablet:flex-col">
        <div className="tablet:basis-1/2 desktop:basis-2/3 flex flex-col justify-center items-center gap-3 p-10 text-white">
          <h2>Special builds</h2>
          <p className="desktop:w-[70%]">
            Want to build something unique, built into the wall or made to fit
            your home perfectly? We can do it! Just drop us an email with what
            you have in mind and we will give you a quote!
          </p>
          <div className="flex gap-4 py-3 max-tablet:flex-col">
            <Button className="hover:buttonFillInvert">Get a quote</Button>
            <Button className="hover:buttonFillInvert">See our builds</Button>
          </div>
          <ul className="special-feature">
            <li>Accessibility for less-abled pets </li>
            <li>In-built Cat/Dog beds </li>
            <li>Pet playroom </li>
            <li>Pet hotel fixtures </li>
            <li>Luxury Outdoor Kennels </li>
            <li>Cat/Dog Café </li>
          </ul>
        </div>
        <div className="tablet:basis-1/2 desktop:basis-1/3">
          <Image
            width={700}
            height={700}
            className="object-cover h-full"
            src="/images/special_builds.png"
            alt="image of cat wall furniture"
          />
        </div>
      </div>
    </Container>
  );
};

export default CustomCategory;
