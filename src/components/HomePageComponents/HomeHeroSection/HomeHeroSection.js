import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./HomeHeroSection.less";
import ArrowButton from "../../buttons/ArrowButton";
import BookDunaBlock from "./BookDunaBlock.js";

const HomeHeroSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  let slidesCountArray = [1, 2, 3];

  function ChangeActiveSlide(direction) {
    if (direction === "next") {
      setActiveSlideIndex((prevState) =>
        prevState === slidesCountArray.length - 1 ? 0 : prevState + 1
      );
    } else if (direction === "prev") {
      setActiveSlideIndex((prevState) =>
        prevState === 0 ? slidesCountArray.length - 1 : prevState - 1
      );
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => ChangeActiveSlide("next"),
    onSwipedRight: () => ChangeActiveSlide("prev"),
  });

  return (
    <section className="homeHeroSection">
      <div className="homeHeroSection__arrowButtonsContainer">
        <ArrowButton leftSide onClick={() => ChangeActiveSlide("prev")} />
        <ArrowButton onClick={() => ChangeActiveSlide("next")} />
      </div>
      <div
        {...handlers}
        className="homeHeroSection__sliderContainer"
        style={{
          //width: `${slidesCountArray.length * 100}%`,
          transform: `translateX(-${(activeSlideIndex / slidesCountArray.length) * 100}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        <BookDunaBlock />
      </div>
      <div className="homeHeroSection__paginationContainer">
        {slidesCountArray.map((_, index) => (
          <div
            className={`homeHeroSection__paginationCircle ${
              index === activeSlideIndex && "filled"
            }`}
            key={index * 12 + Math.random()}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHeroSection;
