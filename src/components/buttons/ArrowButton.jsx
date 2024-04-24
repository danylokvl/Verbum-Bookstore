import "./ArrowButton.less";
import arrowIconRight from "../../assets/icons/arrowRight.svg";
import arrowIconLeft from "../../assets/icons/arrowLeft.svg";

const ArrowButton = ({ leftSide, onClick }) => {
  return (
    <button className="arrowButton" onClick={onClick}>
      <img src={leftSide ? arrowIconLeft : arrowIconRight} />
    </button>
  );
};

export default ArrowButton;
