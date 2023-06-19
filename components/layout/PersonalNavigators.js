import Link from "next/link";
import {
  IoSearchOutline,
  IoCartOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

const lists = [
  {
    component: <IoSearchOutline size="1.5em" />,
    title: "search",
    dropdown: false,
    link: false,
  },
  {
    component: <IoCartOutline size="1.5em" />,
    title: "shopping-cart",
    dropdown: false,
    link: true,
  },
  ,
  {
    component: <IoPersonCircleOutline size="1.5em" />,
    title: "user-center",
    dropdown: true,
    link: true,
  },
];

const PersonalNavigators = () => {
  return (
    <ul className="flex gap-4 tablet:gap-6">
      {lists.map((list) => (
        <li key={list.title} className="hover:cursor-pointer hover:text-orange">
          {list.link ? (
            <Link href={list.title}>{list.component}</Link>
          ) : (
            list.component
          )}
        </li>
      ))}
    </ul>
  );
};

export default PersonalNavigators;
