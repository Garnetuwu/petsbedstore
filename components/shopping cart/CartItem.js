import Card from "../UI/Card";
import FiveStar from "../UI/FiveStar";
import GridCard from "../UI/GridCard";
import Image from "next/image";

const CartItem = ({
  image,
  name,
  width,
  length,
  innerMaterial,
  coverMaterial,
  baseMaterial,
  finalPrice,
}) => {
  return (
    <GridCard>
      <Image
        src={image}
        width={447}
        height={265}
        alt={name}
        className="aspect-[4/3] object-cover p-5"
      />
      <div className="flex">
        <Card className="flex-col gap-4">
          <h2>{name}</h2>
          <FiveStar />
          <p className="font-thin">
            {length} x {width}
          </p>
          <div className="flex gap-3">
            {[innerMaterial, baseMaterial, coverMaterial].map((item) => (
              <Image
                src={`/assets/materials/${item.img}`}
                width={100}
                height={100}
                alt={innerMaterial.name}
                className="w-10"
              />
            ))}
          </div>
        </Card>
        <Card>
          <h3>£{finalPrice}</h3>
        </Card>
      </div>
    </GridCard>
  );
};

export default CartItem;
