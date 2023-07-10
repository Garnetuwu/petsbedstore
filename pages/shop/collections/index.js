import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Container from "@/components/UI/Container";
import Products from "@/components/products/Products";
import Header from "@/components/shop page/Header";
import CollectionBanner from "@/components/products/CollectionBanner";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Collections = () => {
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (!query.category) router.replace("/shop");
  }, [query]);

  return (
    <LayoutWrapper>
      <Container>
        <Header />
        <CollectionBanner filter={query.category} />
        <Products filter={query.category} />
      </Container>
    </LayoutWrapper>
  );
};

export default Collections;
