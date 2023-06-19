const Input = ({ className, ...rest }) => {
  return (
    <input
      className={`w-full bg-inherit outline-none p-2 ${className}`}
      {...rest}
    />
  );
};

export default Input;
