import _ from "lodash";
import React, { useContext, useEffect, useReducer } from "react";

const CartContext = React.createContext({
  cartItems: [],
  onAddToCart: (item) => {},
});

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};

const cartReducer = (prevState, action) => {
  if (action.type === "ADD") {
    const payload = action.payload;
    const currentArr = [...prevState];
    if (prevState.length > 0) {
      const sameItem = currentArr.filter((item) => {
        return (
          item.itemId === payload.itemId &&
          item.width === payload.width &&
          item.length === payload.length &&
          _.isEqual(item.innerMaterial, payload.innerMaterial) &&
          _.isEqual(item.baseMaterial, payload.baseMaterial) &&
          _.isEqual(item.coverMaterial, payload.coverMaterial)
        );
      });
      if (sameItem.length > 0) {
        const itemIndex = currentArr.indexOf(sameItem[0]);
        const selectedItem = currentArr[itemIndex];
        // const newQuantity = ~~currentArr[itemIndex].amount + ~~payload.amount;
        selectedItem.amount += payload.amount;
        selectedItem.finalPrice = Math.floor(
          selectedItem.basePrice * selectedItem.amount
        );
        console.log(currentArr);
        return currentArr;
      }
    }
    currentArr.push(payload);
    return currentArr;
  }
  return [];
};

export const CartContextProvider = ({ children }) => {
  const initialState = [];
  const [cartItems, dispatchCartItems] = useReducer(cartReducer, initialState);

  const addToCartHandler = (item) => {
    dispatchCartItems({ type: "ADD", payload: item });
  };

  const value = {
    cartItems,
    onAddToCart: addToCartHandler,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
