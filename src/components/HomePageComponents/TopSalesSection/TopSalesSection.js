import ResponsiveCard from "../../cards/responsiveCard/ResponsiveCard";
import "./TopSalesSection.less";
import book from "../../../assets/images/tin-u-zharyvi-book-image.jpg";

const TopSalesSection = () => {
  return (
    <section className="topSalesSection">
      <div className="topSalesSection__content">
        <h4>Топ Продажів</h4>
        <div className="topSalesSection__responsiveCardsContainer">
          <ResponsiveCard
            cardImageSrc={book}
            cardImageAlt="Тінь у Жариві"
            cardHeadline="Плоть і Вогонь. Тінь у Жариві"
            cardAuthor="Д. Л. Арментраут"
            cardGenre="Фентезі"
            cardPrice="290₴"
          />
          <ResponsiveCard
            cardImageSrc={book}
            cardImageAlt="Тінь у Жариві"
            cardHeadline="Плоть і Вогонь. Тінь у Жариві"
            cardAuthor="Д. Л. Арментраут"
            cardGenre="Фентезі"
            cardPrice="290₴"
          />
          <ResponsiveCard
            cardImageSrc={book}
            cardImageAlt="Тінь у Жариві"
            cardHeadline="Плоть і Вогонь. Тінь у Жариві"
            cardAuthor="Д. Л. Арментраут"
            cardGenre="Фентезі"
            cardPrice="290₴"
          />
          <ResponsiveCard
            cardImageSrc={book}
            cardImageAlt="Тінь у Жариві"
            cardHeadline="Плоть і Вогонь. Тінь у Жариві"
            cardAuthor="Д. Л. Арментраут"
            cardGenre="Фентезі"
            cardPrice="290₴"
          />
          <ResponsiveCard
            cardImageSrc={book}
            cardImageAlt="Тінь у Жариві"
            cardHeadline="Плоть і Вогонь. Тінь у Жариві"
            cardAuthor="Д. Л. Арментраут"
            cardGenre="Фентезі"
            cardPrice="290₴"
          />
        </div>
      </div>
    </section>
  );
};

export default TopSalesSection;
