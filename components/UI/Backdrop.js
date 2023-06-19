const Backdrop = ({ onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`fixed z-0 left-0 right-0 top-0 bottom-0 bg-black opacity-10 ${className}`}
    />
  );
};

export default Backdrop;
