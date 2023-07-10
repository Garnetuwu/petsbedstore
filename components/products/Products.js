import { useEffect, useState } from "react";
import { DUMMY_PRODUCTS } from "@/utils/products";
import ProductItem from "./ProductItem";
import Link from "next/link";
import Button from "../UI/Button";
import BreadLink from "../../BreadLink";

const Products = ({ filter }) => {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);

  useEffect(() => {
    if (filter) {
      const fitleredProducts = DUMMY_PRODUCTS.filter((el) =>
        el.category.includes(filter)
      );
      setProducts(fitleredProducts);
    }
  }, [filter]);

  return (
    <section className="w-full pt-8">
      <div className="grid grid-cols-2 tablet:grid-cols-3 items-center pb-5 font-light px-3 gap-3 whitespace-nowrap">
        <span className="justify-self-start max-tablet:hidden">
          <BreadLink href="/shop">Categories</BreadLink>
          <span> / </span>
          <span>
            {filter === "dog"
              ? "Dog bed designs"
              : filter === "cat"
              ? "Cat bed designs"
              : "Custom bed designs"}
          </span>
        </span>
        <span className="justify-self-start tablet:justify-self-center">
          {products.length > 0
            ? `${products.length} products`
            : `${products.length} product`}
        </span>
        <span className="justify-self-end">
          <Button className="py-[4px] px-9 rounded-md">Sort</Button>
        </span>
      </div>
      <div className="grid gap-5 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 ">
        {!products.length && (
          <div className="col-span-full text-center">
            No item found. Try a different category
          </div>
        )}
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <ProductItem
              image={product.img}
              name={product.name}
              minPrice={product.price}
              key={product.id}
              id={product.id}
            />
          ))}
      </div>
    </section>
  );
};
export default Products;
