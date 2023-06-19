import Navigation from "./Navigation";
import Footer from "./Footer";

import { notoSans } from "@/styles/fonts";
import { useScroll } from "framer-motion";

const LayoutWrapper = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <div
      className={`bg-light-white flex min-h-screen  flex-col items-center justify-between ${notoSans.className}`}
    >
      <Navigation scrollYProgress={scrollYProgress} />
      <div className="bg-light-white">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
