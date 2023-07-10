import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Categories from "@/components/shop page/Categories";
import CustomCategory from "@/components/shop page/CustomCategory";
import Header from "@/components/shop page/Header";

export default function ShopPage() {
  return (
    <LayoutWrapper>
      <Header />
      <Categories />
      <CustomCategory />
    </LayoutWrapper>
  );
}
