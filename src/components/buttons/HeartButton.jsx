import { useState } from "react";
import "./HeartButton.less";
import heartIconWhite16px from "../../assets/icons/heart-icon-white-16px.svg";
import heartIconBlack16px from "../../assets/icons/heart-icon-black-16px.svg";

const HeartButton = ({ firstClassName = "" }) => {
  const [heartButtonHovered, setHeartButtonHovered] = useState(false);

  return (
    <button
      className={`${firstClassName} heartButton`}
      onMouseEnter={() => setHeartButtonHovered(true)}
      onMouseLeave={() => setHeartButtonHovered(false)}
    >
      <img
        src={heartButtonHovered ? heartIconWhite16px : heartIconBlack16px}
        alt="додати до улюбленого"
      />
    </button>
  );
};

export default HeartButton;
