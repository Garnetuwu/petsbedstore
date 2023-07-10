import { notoSans } from "@/styles/fonts";
import { RxCross2 } from "react-icons/rx";
import socialMediaLinks from "@/utils/socialMediaLinks";

const Announcement = ({ onRemove }) => {
  return (
    <div className={`bg-orange w-full relative z-20`}>
      <div
        className={`mac:container text-sm font-medium px-5 py-2 relative grid tablet:grid-cols-3 content-center items-center ${notoSans.className}`}
      >
        <div className="justify-self-center tablet:col-span-1 tablet:justify-self-start flex gap-2 justify-center items-center">
          <span>Contact:</span>
          <ul className="flex gap-2">
            {socialMediaLinks.map((link) => (
              <li key={link.name}>
                <button
                  className="flex justify-center items-center"
                  href={link.href}
                >
                  {link.icon}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <span className="justify-self-center tablet:justify-self-center whitespace-nowrap">
          Free delivery over $50 across UK
        </span>
        <button
          className="absolute top-2 right-5 tablet:justify-self-end"
          onClick={onRemove}
        >
          <RxCross2 size="1.1em" />
        </button>
      </div>
    </div>
  );
};

export default Announcement;
