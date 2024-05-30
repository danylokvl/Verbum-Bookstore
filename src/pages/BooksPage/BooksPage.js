import "./BooksPage.less";
import backgroundImage from "../../assets/images/booksPage-headline-background-image.jpg";
import chevronRight from "../../assets/icons/chevron-right-16px-white.svg";
import GenresFilter from "../../components/BooksPageComponents/GenresFilter";

const BooksPage = () => {
  return (
    <section className="booksPage">
      <section className="booksPage__topBlock">
        <div className="booksPage__headlineContainer">
          <img src={backgroundImage} className="booksPage__headlineBackgroundImage" />
          <div className="booksPage__breadCrumbsContainer">
            <h3>Книги</h3>
            <div className="booksPage__breadCrumbsLinks">
              <a>Головна</a>
              <img src={chevronRight} />
              <a>Книги</a>
            </div>
          </div>
        </div>
      </section>
      <GenresFilter />
    </section>
  );
};

export default BooksPage;
