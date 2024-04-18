import HomeHeroSection from "./homeHeroSection/HomeHeroSection";
import "./HomePage.less";
import bookDuna from "../../assets/images/bookDuna.png";

const HomePage = () => {
  return (
    <main>
      <HomeHeroSection
        headline='"Дюна" Френк Герберт'
        discountPrice="400₴"
        price="540₴"
        img={bookDuna}
      />
    </main>
  );
};

export default HomePage;
