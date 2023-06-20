import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";

import Logo from "../../logo/Logo";
import Navigators from "./Navigators";
import PersonalNavigators from "./PersonalNavigators";
import DropdownMenu from "./DropdownMenu";
import { AnimatePresence } from "framer-motion";
import Announcement from "../Announcement";

const Navigation = () => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const searchBarHandler = () => {
    setSearchBarVisible((prevState) => !prevState);
  };

  return (
    <>
      {showAnnouncement && (
        <Announcement onRemove={() => setShowAnnouncement(false)} />
      )}
      <div
        className={`sticky top-0 w-screen z-20 ${
          scrollPosition > 0 ? "bg-gray" : "bg-light-white"
        }`}
      >
        <div className="grid grid-cols-3 tablet:grid-cols-2 items-center h-12 px-5 m-auto mac:container">
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
            <PersonalNavigators onToggleSearchBar={searchBarHandler} />
          </div>
        </div>
      </div>
      <AnimatePresence>{expandedMenu && <DropdownMenu />}</AnimatePresence>
    </>
  );
};

export default Navigation;
