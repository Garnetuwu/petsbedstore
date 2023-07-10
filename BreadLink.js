import Link from "next/link";

const BreadLink = ({ children, href, className }) => {
  return (
    <Link
      className={`text-gray hover:underline underline-offset-4 ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default BreadLink;
