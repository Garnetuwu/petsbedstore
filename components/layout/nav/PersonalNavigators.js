import Link from "next/link";
import { IoCartOutline, IoPersonCircleOutline } from "react-icons/io5";
import SearchNavigator from "./SearchNavigator";

const lists = [
  {
    component: <SearchNavigator />,
    title: "search",
    dropdown: false,
    link: false,
  },
  {
    component: <IoCartOutline size="1.5em" />,
    title: "/shopping-cart",
    dropdown: false,
    link: true,
  },
  ,
  {
    component: <IoPersonCircleOutline size="1.5em" />,
    title: "/user-center",
    dropdown: true,
    link: true,
  },
];

const PersonalNavigators = () => {
  return (
    <ul className="flex gap-2 tablet:gap-6">
      {lists.map((list) => (
        <li key={list.title}>
          {list.link ? (
            <Link className=" hover:text-orange" href={list.title}>
              {list.component}
            </Link>
          ) : (
            list.component
          )}
        </li>
      ))}
    </ul>
  );
};

export default PersonalNavigators;
