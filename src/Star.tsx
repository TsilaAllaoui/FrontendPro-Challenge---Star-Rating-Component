import "./Star.scss";
import { AiFillStar } from "react-icons/ai";

function Star({ on }: { on: boolean }) {
  return (
    <div id="star">
      <AiFillStar
        id="left"
        style={{ color: on ? "rgb(251, 205, 22)" : "grey" }}
      />
      <AiFillStar id="right" />
    </div>
  );
}
export default Star;
