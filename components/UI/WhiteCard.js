const { default: Card } = require("./Card");

const WhiteCard = ({ children, className }) => (
  <Card className={`bg-white container-shadow w-full ${className}`}>
    {children}
  </Card>
);

export default WhiteCard;
