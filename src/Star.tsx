import "./Star.scss";
import { FaStarHalf } from "react-icons/fa";

function LeftStar({ on }: { on: boolean }) {
  return (
    <FaStarHalf
      id="left-part"
      style={{ color: on ? "rgb(251, 205, 22)" : "grey" }}
    />
  );
}

function RightStar({ on }: { on: boolean }) {
  return (
    <FaStarHalf
      id="right-part"
      style={{ color: on ? "rgb(251, 205, 22)" : "grey" }}
    />
  );
}

export { LeftStar, RightStar };
