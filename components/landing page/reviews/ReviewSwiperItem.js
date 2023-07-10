import FiveStar from "@/components/UI/FiveStar";

const ReviewSwiperItem = ({ name, icon, review, orders }) => {
  return (
    <div className="flex flex-col justify-between gap-3 p-3 h-[250px]">
      <div>
        <div className="flex gap-5 ">
          <img className="object-none" src={icon.src} alt={name} />
          <div className="flex flex-col">
            <h3 className="font-semibold">{name}</h3>
            <p className="font-light">
              {orders} {orders === 1 ? "order" : "orders"}
            </p>
          </div>
        </div>
        <p className="pt-5">{review}</p>
      </div>
      <FiveStar />
    </div>
  );
};

export default ReviewSwiperItem;
