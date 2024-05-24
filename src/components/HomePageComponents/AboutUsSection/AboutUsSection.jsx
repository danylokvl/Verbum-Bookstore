import "./AboutUsSection.less";
import bookStoreImage from "../../../assets/images/bookStoreImage.jpg";

const AboutUsSection = () => {
  return (
    <section className="aboutUsSection">
      <h3 className="aboutUsSection__sectionHeadline">Про Нас</h3>
      <div className="aboutUsSection__content">
        <div className="aboutUsSection__textContainer">
          <h4>Зустрічайте наш книжковий світ</h4>
          <p>
            Наш магазин пропонує величезний вибір літературних шедеврів усіх жанрів: від класики до
            сучасних бестселерів. Ми прагнемо створити затишну атмосферу для кожного читача,
            незалежно від його вподобань.
            <br />
            <br />
            Ми подаруємо вам особливий досвід. Приєднуйтесь до нас і відкрийте для себе чудовий світ
            літератури разом з нашим книжковим магазином!
          </p>
          <div className="aboutUsSection__bottomTextContent">
            <div className="aboutUsSection__bottomTextItemContainer">
              <h3>20</h3>
              <span>років досвіду</span>
            </div>
            <div className="aboutUsSection__bottomTextItemContainer">
              <h3>10м+</h3>
              <span>задоволених клієнтів</span>
            </div>
          </div>
        </div>
        <div className="aboutUsSection__imageContainer">
          <img src={bookStoreImage} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
