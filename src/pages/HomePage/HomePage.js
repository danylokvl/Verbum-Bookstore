import AboutUsSection from "../../components/HomePageComponents/AboutUsSection/AboutUsSection";
import FeaturesSection from "../../components/HomePageComponents/FeaturesSection/FeaturesSection";
import HelpUkraineSection from "../../components/HomePageComponents/HelpUkraineSection/HelpUkraineSection";
import HomeHeroSection from "../../components/HomePageComponents/HomeHeroSection/HomeHeroSection";
import TopSalesSection from "../../components/HomePageComponents/TopSalesSection/TopSalesSection";
import "./HomePage.less";

const HomePage = () => {
  return (
    <main>
      <HomeHeroSection />
      <FeaturesSection />
      <TopSalesSection />
      <HelpUkraineSection />
      <AboutUsSection />
    </main>
  );
};

export default HomePage;
