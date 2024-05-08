import ScrollableButton from "../../buttons/ScrollableButton";
import killerBotImage from "../../../assets/images/vsi-systemy-nebezpeka-book.png";
import "./KillerBotBlock.less";

const KillerBotBlock = ({ killerBotBlockRef }) => {
  return (
    <div className="homeHeroSection__killerBotBlock" ref={killerBotBlockRef}>
      <div className="homeHeroSection__textAndButtonsContainer">
        <h2>"Всі системи: небзепека" Марта Веллс</h2>
        <div className="homeHeroSection__pricesContainer">
          <span className="homeHeroSection__discountPrice">110₴</span>
          <span className="homeHeroSection__price">210₴</span>
        </div>
        <div className="homeHeroSection__buttonsContainer">
          <ScrollableButton
            className="homeHeroSection__button"
            backgroundColor="#2d2926"
            textColor="white"
          >
            купити
          </ScrollableButton>
          <ScrollableButton
            className="homeHeroSection__button"
            backgroundColor="white"
            textColor="#2d2926"
          >
            переглянути
          </ScrollableButton>
        </div>
      </div>
      <div className="homeHeroSection__imageContainer">
        <img src={killerBotImage} />
      </div>
    </div>
  );
};

export default KillerBotBlock;
