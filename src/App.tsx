import { useEffect, useState } from "react";
import "./App.scss";
import { LeftStar, RightStar } from "./Star";

function App() {
  const descs = [
    "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
    "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
    "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how can improve.",
    "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
    "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform.",
  ];

  const [starCount, setStarCount] = useState(3);
  const [starCountTemp, setStarCountTemp] = useState(3);

  const handleClick = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    i: number
  ) => {
    setStarCount(i + 1);
    setStarCountTemp(i + 1);
  };

  // useEffect(() => {
  //   document.onmousemove = (e) => {
  //     console.log(e.pageX, e.pageY);
  //   };
  // }, []);

  const handleHover = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    i: number
  ) => {
    // let star = e.currentTarget;
    // console.log(
    //   star.getBoundingClientRect().x +
    //     "|" +
    //     star.getBoundingClientRect().y +
    //     ":" +
    //     e.pageX +
    //     "|" +
    //     e.pageY
    // );
    // if (
    //   e.pageX >= star.getBoundingClientRect().x &&
    //   e.pageX <=
    //     star.getBoundingClientRect().x +
    //       star.getBoundingClientRect().width / 2 &&
    //   e.pageY >= star.getBoundingClientRect().y &&
    //   e.pageY <=
    //     star.getBoundingClientRect().y + star.getBoundingClientRect().height
    // ) {
    //   console.log("Case 1");
    //   let a = star.firstElementChild!.querySelector("#left") as HTMLElement;
    //   a.style.color = "yellow";
    //   let b = star.lastElementChild!.querySelector("#right") as HTMLElement;
    //   b.style.color = "grey";
    // } else if (
    //   e.pageX >=
    //     star.getBoundingClientRect().x +
    //       star.getBoundingClientRect().width / 2 &&
    //   e.pageX <=
    //     star.getBoundingClientRect().x + star.getBoundingClientRect().width &&
    //   e.pageY >= star.getBoundingClientRect().y &&
    //   e.pageY <=
    //     star.getBoundingClientRect().y + star.getBoundingClientRect().height
    // ) {
    //   console.log("Case 2");
    //   let a = star.firstElementChild!.querySelector("#left") as HTMLElement;
    //   a.style.color = "yellow";
    //   let b = star.lastElementChild!.querySelector("#right") as HTMLElement;
    //   b.style.color = "yellow";
    // }
    // const stars = document.querySelectorAll("#star");
    // stars.forEach((star) => {
    //   if (star.matches(":hover")) {
    //     let childs = star.children;
    //     for (let i = 0; i < childs.length; i++) {
    //      if (document.po)
    //     }
    //   }
    // });
    // console.log(_e.currentTarget.children);

    setStarCount(i + 1);
  };

  const handleHoverLeaveStars = () => {
    setStarCount(starCountTemp);
  };

  const hoverHandler = (e: Event, star: Element) => {
    let element = e.target as HTMLElement;
    // .firstElementChild! as HTMLElement;
    console.log(star);
    // star.style.color = "yellow";
  };
  useEffect(() => {
    const stars = document.querySelectorAll(".left, .right");
    console.log(stars);
    stars.forEach((star) => {
      console.log(star);
      star.addEventListener("mouseenter", (e) => hoverHandler(e, star));
    });

    return () => {
      stars.forEach((star) =>
        star.removeEventListener("mouseenter", (e) => hoverHandler(e, star))
      );
    };
  }, []);

  return (
    <div id="app">
      <h1>How many stars would you give to our Online Code Editor?</h1>
      <div id="stars" onMouseLeave={handleHoverLeaveStars}>
        {Array.from(Array(10), (_e, i) => {
          return i % 2 == 0 ? (
            <div className="left">
              <LeftStar on={i <= starCount} key={i} />
            </div>
          ) : (
            <div className="right">
              <RightStar on={i <= starCount} key={i} />
            </div>
          );
        })}
      </div>
      <h3>{descs[starCount - 1]}</h3>
    </div>
  );
}

export default App;
