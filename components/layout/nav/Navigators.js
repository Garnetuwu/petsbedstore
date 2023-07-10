import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { navigatorLinks } from "@/utils/navigatorLinks";

const Navigators = () => {
  return (
    <ul className="flex max-tablet:hidden">
      {navigatorLinks.map((link) => (
        <Link href={link.href} key={link.title}>
          <span className="flex items-center px-6 py-3 hover:text-white hover:bg-blue underline-offset-4">
            {link.title} {link.arrowDown ? <IoIosArrowDown /> : null}
          </span>
        </Link>
      ))}
    </ul>
  );
};

export default Navigators;
