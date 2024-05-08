import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./HomeHeroSection.less";
import ArrowButton from "../../buttons/ArrowButton";
import BookDunaBlock from "./BookDunaBlock.js";
import ReadInEnglishBlock from "./ReadInEnglishBlock.jsx";
import KillerBotBlock from "../../HomePageComponents/HomeHeroSection/KillerBotBlock.js";

const HomeHeroSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const bookDunaBlockRef = useRef(null);
  const readInEnglishBlockRef = useRef(null);
  const killerBotBlockRef = useRef(null);

  let contentBlocksRefsArray = [bookDunaBlockRef, readInEnglishBlockRef, killerBotBlockRef];

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
    const lastElementIndex = contentBlocksRefsArray.length - 1;
    const nextSlideIndex = activeSlideIndex === lastElementIndex ? 0 : activeSlideIndex + 1;
    const prevSlideIndex = activeSlideIndex === 0 ? lastElementIndex : activeSlideIndex - 1;
    contentBlocksRefsArray.forEach((contentBlockRef, index) => {
      let valueOfTranslateX =
        index === activeSlideIndex ? 0 : index > activeSlideIndex ? slideWidth : -slideWidth;

      contentBlockRef.current.setAttribute(
        "style",
        `width: ${slideWidth}px; transform: translateX(${valueOfTranslateX}px); transition: transform 0.7s ease-in-out; visibility: ${
          index !== activeSlideIndex ? "hidden" : "visible"
        } `
      );

      setTimeout(() => {
        contentBlocksRefsArray[nextSlideIndex].current.setAttribute(
          "style",
          `transform: translateX(${slideWidth}px); transition: transform 0s; visibility: hidden`
        );
        contentBlocksRefsArray[prevSlideIndex].current.setAttribute(
          "style",
          `transform: translateX(${-slideWidth}px); transition: transform 0s; visibility: hidden`
        );
      }, 700);
    });

    return () => {
      clearTimeout();
    };
  }, [activeSlideIndex, slideWidth]);

  function ChangeVisibleSlide(direction) {
    if (direction === "next") {
      if (activeSlideIndex === contentBlocksRefsArray.length - 1) {
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
        <KillerBotBlock killerBotBlockRef={killerBotBlockRef} />
      </div>
      <div className="homeHeroSection__paginationContainer">
        {contentBlocksRefsArray.map((_, index) => (
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
