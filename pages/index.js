import Banner from "@/components/landing page/Banner";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import Summary from "@/components/landing page/summary/Summary";
import Reviews from "@/components/landing page/reviews/Reviews";
import Deals from "@/components/landing page/deals/Deals";

export default function Home() {
  return (
    <LayoutWrapper>
      <Banner />
      <Summary />
      <Reviews />
      <Deals />
    </LayoutWrapper>
  );
}
