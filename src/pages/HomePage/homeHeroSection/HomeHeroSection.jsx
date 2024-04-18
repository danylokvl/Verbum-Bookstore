import "./HomeHeroSection.less";
import ScrollableButton from "../../../components/buttons/ScrollableButton";

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
            <ScrollableButton className="homeHeroSection__button">купити</ScrollableButton>
            <ScrollableButton className="homeHeroSection__button">переглянути</ScrollableButton>
          </div>
        </div>
        <div className="homeHeroSection__imageContainer">
          <img src={props.img} id="bookDune" className="homeHeroSection__image" />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
