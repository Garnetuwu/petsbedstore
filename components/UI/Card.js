const Card = ({ className, children }) => {
  return (
    <div className={`bg-nude mac:container m-auto  ${className}`}>
      {children}
    </div>
  );
};

export default Card;
