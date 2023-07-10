import GridCard from "../UI/GridCard";
import Breadcrumb from "./Breadcrumb";
import ProductDisplay from "./product display/ProductDisplay";
import ProductPurchaseOptions from "./purchase options/ProductPurchaseOptions";

const ProductDetailMain = ({ product }) => {
  return (
    <GridCard className="p-6 max-laptop:grid-cols-1">
      <Breadcrumb name={product.name} category={product.category[0]} />
      <ProductDisplay images={product.img} />
      <ProductPurchaseOptions
        name={product.name}
        basicMaterials={product.materials}
        length={product.length}
        width={product.width}
        price={product.price}
      />
    </GridCard>
  );
};

export default ProductDetailMain;
