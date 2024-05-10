import FeaturesSection from "../../components/HomePageComponents/FeaturesSection/FeaturesSection";
import HomeHeroSection from "../../components/HomePageComponents/HomeHeroSection/HomeHeroSection";
import TopSalesSection from "../../components/HomePageComponents/TopSalesSection/TopSalesSection";
import "./HomePage.less";

const HomePage = () => {
  return (
    <main>
      <HomeHeroSection />
      <FeaturesSection />
      <TopSalesSection />
    </main>
  );
};

export default HomePage;
