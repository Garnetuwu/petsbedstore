import FeatureCard from "../UI/FeatureCard";
import { dmSerif } from "@/styles/fonts";
import Image from "next/image";

const CollectionBanner = ({ filter }) => {
  return (
    <FeatureCard className="mt-8 text-center gap-5 relative overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-3 px-8 py-3 relative z-10">
        <span>
          <p className="tracking-wider font-extralight">HANDMADE</p>
          <h2 className="capitalize">{filter} Beds</h2>
        </span>
        <p className="font-light">
          From open space beds to a cozy place to snuggle, and even outdoor and
          portable options. The options are endless with our handmade, ethical
          and sustainable beds.
        </p>
        <span className={dmSerif.className}>
          <h3>Bespoke</h3>
          <h3>Made to order</h3>
          <h3>Durable</h3>
        </span>
      </div>
      <div className="max-tablet:absolute max-tablet:opacity-30 top-0 bottom-0">
        <Image
          width={1000}
          height={475}
          src={`/images/${filter}-category.png`}
          className="object-cover w-full h-[475px]"
          alt="banner image of a pet bed"
        />
      </div>
    </FeatureCard>
  );
};

export default CollectionBanner;
