import Card from "../UI/Card";
import { Star, Moon } from "../UI/BackgroundAssets";
import Container from "../UI/Container";

const Header = () => {
  return (
    <Card className="relative">
      <Container className="text-center p-5">
        <h2>Start to build your pet&apos;s dream bed!</h2>
        <p className="font-light">
          start with a base design and go from there!
        </p>
      </Container>
      <Star className="left-10 top-10 max-tablet:left-3 max-tablet:opacity-50" />
      <Star className="left-[17%] top-5 max-tablet:hidden" />
      <Star className="left-[25%] bottom-5 max-laptop:hidden" />
      <Star className="right-[25%] top-1 max-laptop:hidden" />
      <Star className="right-[15%] bottom-0 max-laptop:hidden" />
      <Moon className="right-[8%] top-10 max-tablet:right-5 max-tablet:opacity-50" />
      <Star className="right-5 top-5 max-tablet:hidden" />
    </Card>
  );
};

export default Header;
