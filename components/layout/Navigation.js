import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

import Logo from "../logo/Logo";
import Navigators from "./Navigators";
import PersonalNavigators from "./PersonalNavigators";
import DropdownMenu from "./DropdownMenu";
import { motion } from "framer-motion";

const Navigation = ({ scrollYProgress }) => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  return (
    <>
      <div className="sticky top-0 w-screen z-20 bg-light-white">
        <div className="grid grid-cols-3 tablet:grid-cols-2 items-center h-12 m-auto w-full mac:max-w-screen-mac px-5">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="fixed top-0 left-0 right-0 h-12 bg-gray -z-50 origin-left "
          />
          <button
            className="tablet:hidden hover:text-orange"
            onClick={() => {
              setExpandedMenu((prevState) => !prevState);
            }}
          >
            <IoIosMenu size="2em" />
          </button>
          <div className="flex items-center gap-6 max-tablet:justify-self-center whitespace-nowrap">
            <Logo />
            <Navigators />
          </div>
          <div className="justify-self-end">
            <PersonalNavigators />
          </div>
        </div>
      </div>
      <DropdownMenu expandedMenu={expandedMenu} />
    </>
  );
};

export default Navigation;
