import "./Header.less";
import logo from "../../assets/images/logo.png";
import search from "../../assets/icons/search.svg";
import person from "../../assets/icons/person.svg";
import heart from "../../assets/icons/heart.svg";
import bag from "../../assets/icons/bag.svg";

const Header = () => {
  return (
    <header>
      <nav className="header__nav">
        <ul className="header__linksListLeft">
          <li className="header__linksListItem">
            <a>Книги</a>
          </li>
          <li className="header__linksListItem">
            <a>Автори</a>
          </li>
          <li className="header__linksListItem">
            <a>Доставка і Оплата</a>
          </li>
          <li className="header__linksListItem">
            <a>Контакти</a>
          </li>
        </ul>
        <img className="header__logo" src={logo} />
        <ul className="header__linksListRight">
          <li className="header__linksListItem">
            <a>
              <img src={search} />
              Пошук
            </a>
          </li>
          <li className="header__linksListItem">
            <a>
              <img src={person} />
              Профіль
            </a>
          </li>
          <li className="header__linksListItem">
            <a>
              <img src={heart} />
              Збережене
            </a>
          </li>
          <li className="header__linksListItem">
            <a>
              <img src={bag} />
              Корзина
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
