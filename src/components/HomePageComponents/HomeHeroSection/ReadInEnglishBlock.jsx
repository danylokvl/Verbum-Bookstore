import "./ReadInEnglish.less";
import ScrollableButton from "../../buttons/ScrollableButton";
import englishBooksImage from "../../../assets/images/englishBooks.png";

const ReadInEnglishBlock = ({ readInEnglishBlockRef }) => {
  return (
    <div className="HomeHeroSection__ReadInEnglishBlock" ref={readInEnglishBlockRef}>
      <div className="homeHeroSection__textAndButtonsContainer">
        <h2>Читай in English</h2>
        <span>Відкрий для себе світ англомовної літератури</span>
        <ScrollableButton
          className="homeHeroSection__button"
          backgroundColor="#2d2926"
          textColor="white"
        >
          перейти до книг
        </ScrollableButton>
      </div>
      <div className="homeHeroSection__englishBooksImageContainer">
        <img src={englishBooksImage} alt="Books in English" />
      </div>
    </div>
  );
};

export default ReadInEnglishBlock;
