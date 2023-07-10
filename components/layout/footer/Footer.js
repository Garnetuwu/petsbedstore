import Card from "@/components/UI/Card";
import MailSub from "./MailSub";

const Footer = () => {
  const now = new Date();
  return (
    <div className="flex-col w-screen bg-nude mt-7">
      <MailSub />
      <div className="flex justify-center items-center m-auto h-12 w-full mac:max-w-screen-mac px-5">
        <span className="text-sm"> ©{now.getFullYear()} Bedtime Tails </span>
      </div>
    </div>
  );
};

export default Footer;
