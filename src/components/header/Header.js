import { useState } from "react";

import "./Header.less";
import logo from "../../assets/images/logo.png";
import search from "../../assets/icons/search.svg";
import person from "../../assets/icons/person.svg";
import heart from "../../assets/icons/heart.svg";
import bag from "../../assets/icons/bag.svg";
import menu from "../../assets/icons/menu.svg";
import xmark from "../../assets/icons/xmark.svg";

const Header = () => {
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  return (
    <header className="header">
      <nav className="header__navLargeDesktop">
        <img className="header__logo" src={logo} />
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
        <ul className="header__linksListRight">
          <li className="header__linksListItem">
            <button>
              <img src={search} />
              <span>Пошук</span>
            </button>
          </li>
          <li className="header__linksListItem">
            <button>
              <img src={person} />
              <span>Акаунт</span>
            </button>
          </li>
          <li className="header__linksListItem">
            <button>
              <img src={heart} />
              <span>Збережене</span>
            </button>
          </li>
          <li className="header__linksListItem">
            <button>
              <img src={bag} />
              <span>Корзина</span>
            </button>
          </li>
        </ul>
      </nav>
      <nav className="header__navMobile">
        <div className="header__leftContainer">
          <button className="header__menu" onClick={() => setMenuIsClicked(!menuIsClicked)}>
            <img src={menuIsClicked ? xmark : menu} />
          </button>
          <button className="header__search">
            <img src={search} />
          </button>
        </div>

        <img className="header__logo" src={logo} />
        <ul className="header__linksListRight">
          <li className="header__linksListItem">
            <button>
              <img src={person} />
            </button>
          </li>
          <li className="header__linksListItem">
            <button>
              <img src={heart} />
            </button>
          </li>
          <li className="header__linksListItem">
            <button>
              <img src={bag} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
