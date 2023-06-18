import Button from "../component/Button";
import { GoBell, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
        <Button secondary className={"mb-5"} onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
