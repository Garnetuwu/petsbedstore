import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { navigatorLinks } from "@/utils/navigatorLinks";

const Navigators = () => {
  return (
    <ul className="flex gap-6 max-tablet:hidden">
      {navigatorLinks.map((link) => (
        <Link href={link.href} key={link.title}>
          <span className="font-medium flex items-center hover:text-orange hover:underline underline-offset-4">
            {link.title} {link.arrowDown ? <IoIosArrowDown /> : null}
          </span>
        </Link>
      ))}
    </ul>
  );
};

export default Navigators;
