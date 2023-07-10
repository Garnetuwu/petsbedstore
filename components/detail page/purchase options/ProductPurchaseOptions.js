import { useEffect, useReducer } from "react";
import { dmSerif } from "@/styles/fonts";

import OptionSegment from "./OptionSegment";
import Purchase from "./Purchase";
import FiveStar from "../../UI/FiveStar";

import Product from "@/model/Product";
import { DUMMY_MATERIALS } from "@/utils/products";

const materialList = [
  { title: "base", content: DUMMY_MATERIALS.base },
  { title: "cover", content: DUMMY_MATERIALS.cover },
  { title: "inner", content: DUMMY_MATERIALS.inner },
];

const productReducer = (prevState, action) => {
  if (action.type === "UPDATE_MATERIAL") {
    const newState = new Product({
      ...prevState,
      [action.payload.name]: action.payload.value,
    });
    return {
      ...newState,
    };
  } else if (action.type === "UPDATE_SIZE") {
    const newState = new Product({
      ...prevState,
      [action.payload.name]: action.payload.value,
    });
    return {
      ...newState,
    };
  } else if (action.type === "CHANGE_AMOUNT") {
    const newState = new Product({
      ...prevState,
      amount: +action.payload,
    });
    return { ...newState };
  }
  return {
    name: "",
    minLength: 0,
    length: 0,
    width: 0,
    minWidth: 0,
    baseMaterial: { addupPrice: 0, id: "", name: "" },
    coverMaterial: { addupPrice: 0, id: "", name: "" },
    innerMaterial: { addupPrice: 0, id: "", name: "" },
    amount: 1,
    originalPrice: 0,
    basePrice: 0,
    finalPrice: 0,
  };
};

const ProductPurchaseOptions = ({
  name,
  length,
  width,
  basicMaterials,
  price,
}) => {
  const initialState = new Product({
    name,
    minLength: length[0],
    length: length[0],
    minWidth: width[0],
    width: width[0],
    amount: 1,
    originalPrice: price,
    baseMaterial: DUMMY_MATERIALS.base.filter(
      (el) => el.id === basicMaterials.baseMaterial
    )[0],
    coverMaterial: DUMMY_MATERIALS.cover.filter(
      (el) => el.id === basicMaterials.coverMaterial
    )[0],
    innerMaterial: DUMMY_MATERIALS.inner.filter(
      (el) => el.id === basicMaterials.innerMaterial
    )[0],
  });

  const [productState, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    console.log(productState);
  }, [productState]);

  return (
    <div className="flex flex-col items-center justify-start overflow-y-auto px-10 gap-7 max-laptop:mt-5">
      <div>
        <h2 className={`italic ${dmSerif.className} text-center`}>{name}</h2>
        <FiveStar />
      </div>
      {materialList.map((list) => (
        <OptionSegment
          key={list.title}
          title={list.title}
          content={list.content}
          selectedItem={productState[`${list.title}Material`]}
          dispatch={dispatch}
          material
        />
      ))}
      <OptionSegment
        title="length"
        content={length}
        selectedItem={productState.length}
        dispatch={dispatch}
      />
      <OptionSegment
        title="width"
        content={width}
        selectedItem={productState.width}
        dispatch={dispatch}
      />
      <Purchase
        price={productState.finalPrice}
        amount={productState.amount}
        dispatch={dispatch}
      />
    </div>
  );
};

export default ProductPurchaseOptions;
