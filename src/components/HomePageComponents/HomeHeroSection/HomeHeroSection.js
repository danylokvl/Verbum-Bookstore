import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./HomeHeroSection.less";
import ArrowButton from "../../buttons/ArrowButton";
import BookDunaBlock from "./BookDunaBlock.js";
import ReadInEnglishBlock from "./ReadInEnglishBlock.jsx";

const HomeHeroSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const bookDunaBlockRef = useRef(null);
  const readInEnglishBlockRef = useRef(null);

  let contentBlocksRefsArray = [bookDunaBlockRef, readInEnglishBlockRef];

  useEffect(() => {
    function HandleResize() {
      const divWrapperWidth = document.querySelector(".wrapper").getBoundingClientRect().width;
      setSlideWidth(divWrapperWidth);
    }
    window.addEventListener("resize", () => HandleResize());

    return () => {
      window.removeEventListener("resize", HandleResize());
    };
  }, []);

  useEffect(() => {
    contentBlocksRefsArray.forEach((contentBlockRef, index) => {
      const valueOfTranslateX =
        index === activeSlideIndex ? 0 : index > activeSlideIndex ? slideWidth : -slideWidth;
      contentBlockRef.current.setAttribute(
        "style",
        `width: ${slideWidth}px; transform: translateX(${valueOfTranslateX}px); transition: transform 0.7s ease-in-out; 
        visibility: ${index > activeSlideIndex ? "hidden" : "visible"}`
      );
    });

    return () => {};
  }, [activeSlideIndex, slideWidth]);

  function ChangeVisibleSlide(direction) {
    if (direction === "next") {
      if (activeSlideIndex === contentBlocksRefsArray.length - 1) {
        var newContentBlocksRefsArray = contentBlocksRefsArray
          .slice(1)
          .concat(contentBlocksRefsArray.slice(0, 1));
        contentBlocksRefsArray = newContentBlocksRefsArray;
        setActiveSlideIndex(0);
      } else setActiveSlideIndex(activeSlideIndex + 1);
    } else if (direction === "prev") {
      setActiveSlideIndex((prevState) =>
        prevState === 0 ? contentBlocksRefsArray.length - 1 : prevState - 1
      );
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => ChangeVisibleSlide("next"),
    onSwipedRight: () => ChangeVisibleSlide("prev"),
  });

  return (
    <section className="homeHeroSection">
      <div className="homeHeroSection__arrowButtonsContainer">
        <ArrowButton leftSide onClick={() => ChangeVisibleSlide("prev")} />
        <ArrowButton onClick={() => ChangeVisibleSlide("next")} />
      </div>
      <div {...handlers} className="homeHeroSection__sliderContainer">
        <BookDunaBlock bookDunaBlockRef={bookDunaBlockRef} />
        <ReadInEnglishBlock readInEnglishBlockRef={readInEnglishBlockRef} />
      </div>
      <div className="homeHeroSection__paginationContainer">
        {/*slidesCountArray.map((_, index) => (
          <div
            className={`homeHeroSection__paginationCircle ${
              index === activeSlideIndex && "filled"
            }`}
            key={index * 12 + Math.random()}
          />
        ))*/}
      </div>
    </section>
  );
};

export default HomeHeroSection;
