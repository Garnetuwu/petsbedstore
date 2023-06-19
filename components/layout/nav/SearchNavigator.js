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
            className="absolute z-10 left-[10%] right-[10%] top-12 max-tablet:hidden"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <SearchBar className="h-15 border-b shadow-md shadow-nude border-b-orange" />
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
