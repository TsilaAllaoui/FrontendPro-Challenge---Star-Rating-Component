import { useState } from "react";
import "./App.scss";
import Star from "./Star";

function App() {
  const descs = [
    "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
    "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
    "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how can improve.",
    "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
    "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform.",
  ];

  const [starCount, setStarCount] = useState(1);
  const [starCountTemp, setStarCountTemp] = useState(1);

  const handleClick = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    i: number
  ) => {
    setStarCount(i + 1);
    setStarCountTemp(i + 1);
  };

  const handleHover = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    i: number
  ) => {
    setStarCount(i + 1);
  };

  const handleHoverLeaveStars = () => {
    setStarCount(starCountTemp);
  };

  return (
    <div id="app">
      <h1>How many stars would you give to our Online Code Editor?</h1>
      <div id="stars" onMouseLeave={handleHoverLeaveStars}>
        {Array.from(Array(5), (_e, i) => {
          return (
            <div
              onClick={(e) => handleClick(e, i)}
              onMouseEnter={(e) => handleHover(e, i)}
            >
              <Star on={i < starCount} />
            </div>
          );
        })}
      </div>
      <h3>{descs[starCount - 1]}</h3>
    </div>
  );
}

export default App;
