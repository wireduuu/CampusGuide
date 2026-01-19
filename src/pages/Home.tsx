import HeroSection from "../components/sections/HeroSection";
import CategoriesSection from "../components/sections/CategoriesSection";
import EssentialsSection from "../components/sections/EssentialsSection";
import BuildingsGrid from "../components/sections/BuildingsGrid";

const Home = () => {
  return (
    <>
      <HeroSection />
        <CategoriesSection />
        <EssentialsSection />
        <BuildingsGrid />
    </>
  );
};

export default Home;
