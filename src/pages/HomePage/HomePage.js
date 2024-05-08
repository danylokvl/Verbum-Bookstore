import FeaturesSection from "../../components/HomePageComponents/FeaturesSection/FeaturesSection";
import HomeHeroSection from "../../components/HomePageComponents/HomeHeroSection/HomeHeroSection";
import "./HomePage.less";

const HomePage = () => {
  return (
    <main>
      <HomeHeroSection />
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
