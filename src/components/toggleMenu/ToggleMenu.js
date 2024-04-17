import "./ToggleMenu.less";
import xmarkWhite from "../../assets/icons/xmarkWhite.svg";
import arrowRight from "../../assets/icons/nav-arrow-right.svg";
import mailGrey from "../../assets/icons/mail-grey.svg";
import phoneOutcomeGrey from "../../assets/icons/phone-outcome-grey.svg";

const ToggleMenu = ({ setMenuIsOpen }) => {
  return (
    <>
      <nav className="toggleMenu">
        <div className="toggleMenu__openCloseContainer">
          <span>Меню</span>
          <button onClick={() => setMenuIsOpen(false)}>
            <img src={xmarkWhite} />
          </button>
        </div>
        <ul className="toggleMenu__linksList">
          <li>
            <span>Книги</span>
            <img src={arrowRight} />
          </li>
          <li>
            <span>Доставка і Оплата</span>
            <img src={arrowRight} />
          </li>
          <li>
            <span>Контакти</span>
            <img src={arrowRight} />
          </li>
          <li>
            <span>FAQs</span>
            <img src={arrowRight} />
          </li>
        </ul>
        <div className="toggleMenu__textContainer">
          <h3>Потрібна допомога?</h3>
          <ul>
            <li>
              <img src={mailGrey} />
              <span>info@domain.com</span>
            </li>
            <li>
              <img src={phoneOutcomeGrey} />
              <span>+38 063 76 6284</span>
            </li>
          </ul>
        </div>
      </nav>
      <div className="overlay" />
    </>
  );
};

export default ToggleMenu;
