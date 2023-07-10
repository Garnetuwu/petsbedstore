import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchBar from "./SearchBar";
import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "@/components/UI/Backdrop";

const SearchNavigator = () => {
  const [expandedSearch, setExpandedSearch] = useState(false);
  return (
    <div className="flex max-tablet:hidden">
      <AnimatePresence>
        {expandedSearch && (
          <motion.div
            className="absolute z-10 left-[10%] right-[10%] top-0 bg-light-white border-4 border-black/50  shadow-md p-10 rounded-sm max-tablet:hidden"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-center pb-5">Search product</h2>
            <SearchBar className="border shadow-md shadow-black/30 border-black rounded-md" />
          </motion.div>
        )}
      </AnimatePresence>
      {expandedSearch && (
        <Backdrop
          onClick={() => setExpandedSearch(false)}
          className="max-tablet:hidden"
        />
      )}
      <button
        className=" hover:text-orange"
        onClick={() => setExpandedSearch((prevState) => !prevState)}
      >
        <IoSearchOutline size="1.5em" />
      </button>
    </div>
  );
};

export default SearchNavigator;
