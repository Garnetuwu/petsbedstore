import Input from "../../UI/Input";
import { IoArrowForwardOutline } from "react-icons/io5";

const SearchBar = ({ className }) => {
  return (
    <div
      className={`bg-light-white overflow-hidden flex items-center px-2 ${className}`}
    >
      <Input type="text" placeholder="search item" />
      <button>
        <IoArrowForwardOutline size="1.5em" />
      </button>
    </div>
  );
};
export default SearchBar;
