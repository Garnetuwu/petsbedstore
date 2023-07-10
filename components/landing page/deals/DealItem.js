const DealItem = ({ children, className, image }) => {
  return (
    <div
      className={`bg-white rounded-sm overflow-hidden place-self-center w-full h-full ${className}`}
    >
      <div
        className={`bg-no-repeat bg-right w-full h-full ${
          image === 1 ? "bg-deal1" : "bg-deal2"
        } `}
      >
        <p className="text-black font-semibold p-5 w-[55%]">{children}</p>
      </div>
    </div>
  );
};

export default DealItem;
