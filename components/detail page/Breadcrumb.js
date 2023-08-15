import BreadLink from "../UI/BreadLink";

const Breadcrumb = ({ name, category }) => {
  return (
    <div className="font-light col-span-2 max-laptop:col-span-1">
      <BreadLink href="/shop">Shop</BreadLink>
      {` / `}
      <BreadLink
        href={`/shop/collections?category=${category}`}
        className="capitalize"
      >
        {category} Bed Designs
      </BreadLink>
      {` / `} {name}
    </div>
  );
};

export default Breadcrumb;
