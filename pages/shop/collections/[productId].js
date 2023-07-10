import Container from "@/components/UI/Container";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Header from "@/components/shop page/Header";
import ProductDetailMain from "@/components/detail page/ProductDetailMain";
import { DUMMY_PRODUCTS } from "@/utils/products";

const ProductDetail = (props) => {
  return (
    <LayoutWrapper>
      <Container>
        <Header />
        <ProductDetailMain product={props.productData} />
      </Container>
    </LayoutWrapper>
  );
};

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productId: "001",
        },
      },
      {
        params: {
          productId: "002",
        },
      },
      {
        params: {
          productId: "003",
        },
      },
    ],

    fallback: "blocking",
  };
}

export const getStaticProps = async (context) => {
  const productId = context.params.productId;
  const product = DUMMY_PRODUCTS.find((p) => p.id === productId);
  return {
    props: {
      productData: product,
    },
  };
};

export default ProductDetail;
