import Navigation from "./nav/Navigation";
import Footer from "./Footer";

import { notoSans } from "@/styles/fonts";

const LayoutWrapper = ({ children }) => {
  return (
    <div
      className={`bg-light-white flex min-h-screen  flex-col items-center justify-between ${notoSans.className}`}
    >
      <Navigation />
      <div className="bg-light-white h-[200vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
