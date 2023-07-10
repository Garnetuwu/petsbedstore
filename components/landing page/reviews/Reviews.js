import Card from "../../UI/Card";
import ReviewSwiper from "./ReviewSwiper";

const Reviews = () => {
  return (
    <Card className="flex-col p-5 mac:container">
      <h2 className="text-center px-10">
        Don't take our word for it! Read customer reviews!
      </h2>
      <ReviewSwiper />
    </Card>
  );
};

export default Reviews;
