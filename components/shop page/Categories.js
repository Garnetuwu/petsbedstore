import Container from "../UI/Container";
import CategoryButton from "./CategoryButton";

const Categories = () => {
  return (
    <Container className="mt-8">
      <div className="text-white bg-gray text-center grid grid-cols-12 relative rounded-sm overflow-hidden">
        <h2 className="col-span-6 p-3 max-tablet:col-span-12">
          Cat bed designs
        </h2>
        <h2 className="col-span-6 p-3 max-tablet:col-span-12 order-3">
          Dog bed designs
        </h2>

        <CategoryButton
          buttonClass="tablet:stack-1 tablet:trapezoid col-span-12 order-2"
          src="/images/cat-category.png"
          hoverClass="tablet:left-0"
          address="/collections?category=cat"
          name="cat category"
        >
          Treat your cat with unmatched creature comfort. built to their
          requirements and personal preferences. Choose your design, dimensions,
          materials, and colours, and finish off with a personalised nameplate!
        </CategoryButton>

        <CategoryButton
          buttonClass="tablet:stack-2 tablet:trapezoid-reverse col-span-12 order-4"
          src="/images/dog-category.png"
          hoverClass="tablet:right-0"
          address="/collections?category=dog"
          name="dog category"
        >
          Treat your dog with the perfect bed that will outlast any other. built
          to fit them and their personality. Choose your design, dimensions,
          materials, and colours. Finish off with a personalised nameplate or
          two if you have dogs that like to share!
        </CategoryButton>
      </div>
    </Container>
  );
};

export default Categories;
