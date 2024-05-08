import "./FeaturesSection.less";
import books64px from "../../../assets/icons/books64px.svg";
import truck64px from "../../../assets/icons/truck64px.svg";
import payment64px from "../../../assets/icons/payment64px.svg";
import dialog64px from "../../../assets/icons/dialog64px.svg";

const FeaturesSection = () => {
  return (
    <section className="featuresSection">
      <div className="featuresSection__content">
        <div className="featuresSection__iconsWithTextContainer">
          <div className="featuresSection__iconWithTextElement">
            <img className="featuresSection__image" src={books64px} id="booksIcon" />
            <div className="featuresSection__textContainer">
              <span className="featuresSection__featureHeadline">Книги</span>
              <span className="featuresSection__featureText">Лише найкраща література</span>
            </div>
          </div>
          <div className="featuresSection__iconWithTextElement">
            <img className="featuresSection__image" src={truck64px} id="truckIcon" />
            <div className="featuresSection__textContainer">
              <span className="featuresSection__featureHeadline">Доставка</span>
              <span className="featuresSection__featureText">Доставляємо по всій Україні</span>
            </div>
          </div>
          <div className="featuresSection__iconWithTextElement">
            <img className="featuresSection__image" src={payment64px} id="paymentIcon" />
            <div className="featuresSection__textContainer">
              <span className="featuresSection__featureHeadline">Онлайн платежі</span>
              <span className="featuresSection__featureText">Сплачуй карткою</span>
            </div>
          </div>
          <div className="featuresSection__iconWithTextElement">
            <img className="featuresSection__image" src={dialog64px} id="dialogIcon" />
            <div className="featuresSection__textContainer">
              <span className="featuresSection__featureHeadline">Завжди на зв’язку</span>
              <span className="featuresSection__featureText">Консультуємо клієнтів</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
