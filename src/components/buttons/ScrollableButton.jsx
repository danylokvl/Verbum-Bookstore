import { useState } from "react";
import "./ScrollableButton.less";

const ScrollableButton = ({
  className,
  children,
  onClick,
  backgroundColor,
  textColor,
  fontSize = "16px",
}) => {
  const [mouseOn, setMouseOn] = useState(false);

  return (
    <button
      className={`${className} scrollableButton`}
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      <div onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}>
        <span
          className={mouseOn ? "mouseOn" : undefined}
          style={{ fontSize: fontSize, color: textColor }}
        >
          {children}
        </span>
        <span
          className={mouseOn ? "mouseOn" : undefined}
          style={{ fontSize: fontSize, color: textColor }}
        >
          {children}
        </span>
      </div>
    </button>
  );
};

export default ScrollableButton;
