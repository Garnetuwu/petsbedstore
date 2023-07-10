const Card = ({ className, children }) => {
  return (
    <div className={`m-auto flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
};

export default Card;
