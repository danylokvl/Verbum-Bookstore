import { useState } from "react";
import "./ScrollableButton.less";

const ScrollableButton = ({ className, children, onClick }) => {
  const [mouseOn, setMouseOn] = useState(false);

  return (
    <button className={`${className} scrollableButton`} onClick={onClick}>
      <div onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}>
        <span className={mouseOn ? "mouseOn" : null}>{children}</span>
        <span className={mouseOn ? "mouseOn" : null}>{children}</span>
      </div>
    </button>
  );
};

export default ScrollableButton;
