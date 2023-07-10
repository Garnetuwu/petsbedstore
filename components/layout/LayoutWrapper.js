import Navigation from "./nav/Navigation";
import Footer from "./footer/Footer";

import { dmSerif, notoSans } from "@/styles/fonts";

const LayoutWrapper = ({ children }) => {
  return (
    <main
      className={`bg-light-white flex max-w-screen min-h-screen flex-col items-center justify-between ${dmSerif.variable} ${notoSans.className}`}
    >
      <div>
        <Navigation />
        <div className="w-screen overflow-hidden"> {children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default LayoutWrapper;
