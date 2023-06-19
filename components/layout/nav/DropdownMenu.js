import { navigatorLinks } from "@/utils/navigatorLinks";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

const DropdownMenu = () => {
  const router = useRouter();
  return (
    <motion.div
      className="fixed left-0 right-0 top-12 z-10"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      exit={{ y: -200 }}
      transition={{ duration: 0.5 }}
    >
      <ul className=" tablet:hidden flex flex-col bg-light-white shadow-md shadow-blue-500/50">
        {navigatorLinks.map((link) => (
          <li
            className="text-center font-medium w-full py-1.5 hover:bg-orange hover:cursor-pointer"
            onClick={() => {
              router.push(link.href);
            }}
            key={link.title}
          >
            {link.title}
          </li>
        ))}
        <li>
          <SearchBar className="my-2 mx-5 border rounded-sm shadow-dark-color" />
        </li>
      </ul>
    </motion.div>
  );
};

export default DropdownMenu;
