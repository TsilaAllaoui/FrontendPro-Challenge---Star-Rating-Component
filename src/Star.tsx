import "./Star.scss";
import { AiFillStar } from "react-icons/ai";

function Star({ on }: { on: boolean }) {
  return (
    <div id="star" style={{ color: on ? "rgb(251, 205, 22)" : "grey" }}>
      <AiFillStar />
    </div>
  );
}
export default Star;
