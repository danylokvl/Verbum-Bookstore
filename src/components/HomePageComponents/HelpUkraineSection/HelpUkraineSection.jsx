import "./HelpUkraineSection.less";
import soldierImage from "../../../assets/images/soldierImage.jpg";
import ScrollableButton from "../../buttons/ScrollableButton";

const HelpUkraineSection = () => {
  return (
    <section className="helpUkraineSection">
      <div className="helpUkraineSection__content">
        <div className="helpUkraineSection__imageContainer">
          <img src={soldierImage} alt="Ukraine Soldier" />
          <span>Слава Україні</span>
          <div className="helpUkraineSection__lineDivider" />
        </div>
        <div className="helpUkraineSection__textAndButtonsContainer">
          <h4>Допомагаємо Збройним Силам України</h4>
          <p>
            Купуючи книги в нашому магазині ви поповнюєте свою бібліотеку цікавою літературою, а
            також допомагаєте наблизити нашу перемогу. Ми відправляємо 20% від суми кожного
            проданого товару на підтримку Збройних Сил України.
          </p>
          <ScrollableButton backgroundColor="#2d2926" textColor="white">
            перейти до книг
          </ScrollableButton>
        </div>
      </div>
    </section>
  );
};

export default HelpUkraineSection;
