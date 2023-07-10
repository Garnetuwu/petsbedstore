const CustomImage = ({ className, imageName }) => {
  return <div className={`bg-cover bg-center bg-${imageName} ${className}`} />;
};

export default CustomImage;
