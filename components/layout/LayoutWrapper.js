import Navigation from "./nav/Navigation";
import Footer from "./Footer";

import { notoSans } from "@/styles/fonts";

const LayoutWrapper = ({ children }) => {
  return (
    <div
      className={`bg-light-white flex w-screen min-h-screen flex-col items-center justify-between ${notoSans.className}`}
    >
      <div>
        <Navigation />
        <div className="w-screen"> {children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
