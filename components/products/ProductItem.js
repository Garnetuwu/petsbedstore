import { dmSerif } from "@/styles/fonts";
import Link from "next/link";

const ProductItem = ({ image, name, minPrice, id }) => {
  return (
    <Link href={`/shop/collections/${id}`}>
      <div className="rounded-md overflow-hidden">
        <img
          src={image}
          className="w-full h-[420px] object-cover transition-transform ease-in duration-200 hover:scale-125 hover:opacity-50"
        />
      </div>
      <h3 className={`${dmSerif.className} italic text-center pt-2`}>{name}</h3>
      <p className="text-grey underline text-center font-light">
        from £{minPrice} GBP
      </p>
    </Link>
  );
};

export default ProductItem;
