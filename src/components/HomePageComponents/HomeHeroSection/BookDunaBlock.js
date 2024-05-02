import ScrollableButton from "../../buttons/ScrollableButton";
import bookDuna from "../../../assets/images/bookDuna.png";

const BookDunaBlock = ({ bookDunaBlockRef }) => {
  return (
    <div className="homeHeroSection__bookDunaContainer" ref={bookDunaBlockRef}>
      <div className="homeHeroSection__textAndButtonsContainer">
        <h2>'Дюна' Френк Герберт</h2>
        <div className="homeHeroSection__pricesContainer">
          <span className="homeHeroSection__discountPrice">400₴</span>
          <span className="homeHeroSection__price">540₴</span>
        </div>
        <div className="homeHeroSection__buttonsContainer">
          <ScrollableButton className="homeHeroSection__button">купити</ScrollableButton>
          <ScrollableButton className="homeHeroSection__button">переглянути</ScrollableButton>
        </div>
      </div>
      <div className="homeHeroSection__imageContainer">
        <img src={bookDuna} />
      </div>
    </div>
  );
};

export default BookDunaBlock;
