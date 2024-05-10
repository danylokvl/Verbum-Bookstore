import { useState } from "react";
import "./ResponsiveCard.less";
import cartIconWhite20px from "../../../assets/icons/cartIcon-white-20px.svg";
import cartIconBlack20px from "../../../assets/icons/cartIcon-black-20px.svg";
import eyeIconWhite20px from "../../../assets/icons/eyeIcon-white-20px.svg";
import eyeIconBlack20px from "../../../assets/icons/eyeIcon-black-20px.svg";
import HeartButton from "../../buttons/HeartButton";

const ResponsiveCard = (props) => {
  const [cardHoverObject, setCardHoverObject] = useState({
    cardHovered: false,
    cartButtonHovered: false,
    eyeButtonHovered: false,
  });

  return (
    <div
      className="responsiveCard"
      onMouseEnter={() => setCardHoverObject((prevState) => ({ ...prevState, cardHovered: true }))}
      onMouseLeave={() => setCardHoverObject((prevState) => ({ ...prevState, cardHovered: false }))}
    >
      <div className="responsiveCard__content">
        <div className="responsiveCard__imageContainer">
          <img
            src={props.cardImageSrc}
            alt={props.cardImageAlt}
            className="responsiveCard__image"
          />
          <HeartButton firstClassName="responsiveCard__heartButton" />
          <div className="responsiveCard__hoverButtonsContainer">
            <button
              className="responsiveCard__hoverButton"
              onMouseEnter={() => {
                setCardHoverObject((prevState) => ({ ...prevState, cartButtonHovered: true }));
              }}
              onMouseLeave={() => {
                setCardHoverObject((prevState) => ({ ...prevState, cartButtonHovered: false }));
              }}
            >
              <img
                src={cardHoverObject.cartButtonHovered ? cartIconBlack20px : cartIconWhite20px}
                alt="додати в кошик"
              />
            </button>
            <div className="responsiveCard__verticalDivider" />
            <button
              className="responsiveCard__hoverButton"
              onMouseEnter={() => {
                setCardHoverObject((prevState) => ({ ...prevState, eyeButtonHovered: true }));
              }}
              onMouseLeave={() => {
                setCardHoverObject((prevState) => ({ ...prevState, eyeButtonHovered: false }));
              }}
            >
              <img
                src={cardHoverObject.eyeButtonHovered ? eyeIconBlack20px : eyeIconWhite20px}
                alt="переглянути"
              />
            </button>
          </div>
        </div>
        <div className="responsiveCard__textContainer">
          <h5>{props.cardHeadline}</h5>
          <span className="responsiveCard__author">{props.cardAuthor}</span>
          <span className="responsiveCard__genre">{props.cardGenre}</span>
          <span className="responsiveCard__price">{props.cardPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCard;
