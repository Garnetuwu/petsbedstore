const Footer = () => {
  const now = new Date();
  return (
    <div className="w-screen bg-nude ">
      <div className="flex justify-center items-center m-auto h-12 w-full mac:max-w-screen-mac px-5">
        <span className="text-sm"> ©{now.getFullYear()} Bedtime Tails </span>
      </div>
    </div>
  );
};

export default Footer;
