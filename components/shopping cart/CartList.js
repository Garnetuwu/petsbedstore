import WhiteCard from "../UI/WhiteCard";
import { useCartContext } from "@/store/cartContext";
import Button from "../UI/Button";
import { useRouter } from "next/router";
import CartItem from "./CartItem";

const CartList = () => {
  const router = useRouter();
  const { cartItems } = useCartContext();
  const noItem = cartItems.length === 0;

  const buttonHandler = () => {
    router.push("/shop");
  };

  return (
    <WhiteCard className={`flex flex-col gap-5 p-10 desktop:basis-2/3`}>
      <h2>Your Shopping Cart</h2>
      {noItem && (
        <>
          <h3>There are currently no items in your basket.</h3>
          <Button onClick={buttonHandler} className="hover:buttonFill">
            Continue shopping
          </Button>
        </>
      )}
      {!noItem &&
        cartItems.map((item) => (
          <CartItem
            image={item.image}
            name={item.name}
            width={item.width}
            length={item.length}
            innerMaterial={item.innerMaterial}
            coverMaterial={item.coverMaterial}
            baseMaterial={item.baseMaterial}
            finalPrice={item.finalPrice}
            quantity={item.quantity}
          />
        ))}
    </WhiteCard>
  );
};

export default CartList;
