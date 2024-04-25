import { useState } from "react";
import "./HomeHeroSection.less";
import ScrollableButton from "../../../components/buttons/ScrollableButton";
import bookDuna from "../../../assets/images/bookDuna.png";
import ArrowButton from "../../../components/buttons/ArrowButton";

const slidesDataArray = [
  {
    headline: "'Дюна' Френк Герберт",
    discountPrice: "400₴",
    price: "540₴",
    img: bookDuna,
    id: "bookDuna",
  },
  {
    headline: "'Дюна' Френк Герберт",
    discountPrice: "400₴",
    price: "540₴",
    img: bookDuna,
    id: "bookDuna2",
  },
  {
    headline: "'Дюна' Френк Герберт",
    discountPrice: "400₴",
    price: "540₴",
    img: bookDuna,
    id: "bookDuna3",
  },
];

const HomeHeroSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <section className="homeHeroSection">
      <div className="homeHeroSection__arrowButtonsContainer">
        <ArrowButton leftSide />
        <ArrowButton />
      </div>
      {slidesDataArray.map((slideData) => (
        <div className={`homeHeroSection__content ${slideData.id + "Content"}`} key={slideData.id}>
          <div className="homeHeroSection__textAndButtonsContainer">
            <h2>{slideData.headline}</h2>
            <div className="homeHeroSection__pricesContainer">
              <span className="homeHeroSection__discountPrice">{slideData.discountPrice}</span>
              <span className="homeHeroSection__price">{slideData.price}</span>
            </div>
            <div className="homeHeroSection__buttonsContainer">
              <ScrollableButton className="homeHeroSection__button">купити</ScrollableButton>
              <ScrollableButton className="homeHeroSection__button">переглянути</ScrollableButton>
            </div>
          </div>
          <div className={`homeHeroSection__imageContainer ${slideData.id}`}>
            <img src={slideData.img} className="homeHeroSection__image" />
          </div>
        </div>
      ))}
      <div className="homeHeroSection__paginationContainer">
        {slidesDataArray.map((_, index) => (
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
