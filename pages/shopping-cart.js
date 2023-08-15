import Container from "@/components/UI/Container";
import Deals from "@/components/landing page/deals/Deals";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Reviews from "@/components/landing page/reviews/Reviews";
import CartList from "@/components/shopping cart/CartList";
import BillOfSale from "@/components/shopping cart/BillOfSale";
import { useCartContext } from "@/store/cartContext";

const ShoppingCart = () => {
  const { cartItems } = useCartContext();
  console.log(cartItems);
  return (
    <LayoutWrapper>
      <Deals />
      <Container className="flex flex-col desktop:flex-row m-10 gap-5">
        <CartList />
        {cartItems.length > 0 && <BillOfSale />}
      </Container>
      <Reviews />
    </LayoutWrapper>
  );
};

export default ShoppingCart;
