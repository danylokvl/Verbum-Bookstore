import { useState } from "react";
import "./Footer.less";
import logo from "../../assets/images/logo.png";
import phoneIcon from "../../assets/icons/phone-grey.svg";
import mailIcon from "../../assets/icons/mail-grey.svg";
import sendMailIcon from "../../assets/icons/send-mail-grey.svg";
const Footer = () => {
  const [emailValue, setEmailValue] = useState("");

  const handleNewsSubscribeForm = () => {};

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__contactsContainer">
          <img src={logo} />
          <ul className="footer__contactsList">
            <li>
              <img src={phoneIcon} />
              <span>+38 063 76 6284</span>
            </li>
            <li>
              <img src={mailIcon} />
              <span>verbumbooks@gmail.com</span>
            </li>
          </ul>
          <span>
            © verbum.ua 2004-2024. Копіювання матеріалів з сайту без активного посилання на цей
            ресурс заборонено
          </span>
        </div>
        <div className="footer__linksContainer">
          <div className="footer__linksListContainer">
            <h5>Новини</h5>
            <ul>
              <li>
                <a>Акції</a>
              </li>
              <li>
                <a>Анонси</a>
              </li>
              <li>
                <a>Новинки</a>
              </li>
            </ul>
          </div>
          <div className="footer__linksListContainer">
            <h5>Інфо</h5>
            <ul>
              <li>
                <a>Повернення товару </a>
              </li>
              <li>
                <a>Оплата частинами </a>
              </li>
              <li>
                <a>Вакансії</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__newsSubscribeContainer">
          <h5>Підпишись на наші новини</h5>
          <span>Отримай 10% знижки на перший товар</span>
          <form className="footer__subscribeForm" onSubmit={handleNewsSubscribeForm}>
            <input
              type="email"
              placeholder="Введи свій Email"
              autoComplete="off"
              onChange={(e) => setEmailValue(e.target.value)}
              value={emailValue}
            />
            <button type="submit">
              <img src={emailValue === "" ? mailIcon : sendMailIcon} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
