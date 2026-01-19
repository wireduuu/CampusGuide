import HeroSection from "../components/sections/HeroSection";
// import CategoriesSection from "../components/sections/CategoriesSection";
import EssentialsSection from "../components/sections/EssentialsSection";
import BuildingsGrid from "../components/sections/BuildingsGrid";
import ExploreSection from "../components/sections/ExploreSection";

const Home = () => {
  return (
    <>
      <HeroSection />
        {/* <CategoriesSection /> */}
        <ExploreSection />
        <EssentialsSection />
        <BuildingsGrid />
    </>
  );
};

export default Home;
