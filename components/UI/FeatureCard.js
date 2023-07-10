const { default: GridCard } = require("./GridCard");

const FeatureCard = ({ children, className }) => {
  return (
    <GridCard
      className={`max-w-[1400px] m-auto max-tablet:grid-cols-1 ${className}`}
    >
      {children}
    </GridCard>
  );
};

export default FeatureCard;
