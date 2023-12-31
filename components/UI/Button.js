const Button = ({ onClick, className, children, ...rest }) => {
  return (
    <button
      className={`rounded-[10px] border-2 border-dark-color px-5 py-2 text-center hover:animatedColor ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
