const { default: Link } = require("next/link");
import { cinzel } from "@/styles/fonts";

const Logo = () => {
  return (
    <span>
      <Link href="/">
        <span
          className={`${cinzel.className} font-bold text-xl tablet:text-2xl`}
        >
          Bedtime Tails
        </span>
      </Link>
    </span>
  );
};

export default Logo;
