import "./HomeHeroSection.less";

import bookGreenLights from "../../../assets/images/bookGreenLights.png";
import bookDuna from "../../../assets/images/bookDuna.png";

const HomeHeroSection = (props) => {
  return (
    <section className="homeHeroSection">
      <div className="homeHeroSection__content">
        <div className="homeHeroSection__leftContainer">
          <h2>{props.headline}</h2>
          <div className="homeHeroSection__pricesContainer">
            <span className="homeHeroSection__discountPrice">{props.discountPrice}</span>
            <span className="homeHeroSection__price">{props.price}</span>
          </div>
          <div className="homeHeroSection__buttonsContainer">
            <button className="homeHeroSection__button">КУПИТИ</button>
            <button className="homeHeroSection__button">ПЕРЕГЛЯНУТИ</button>
          </div>
        </div>
        <img src={bookDuna} id="bookGreenLights" className="homeHeroSection__image" />
      </div>
    </section>
  );
};

export default HomeHeroSection;
