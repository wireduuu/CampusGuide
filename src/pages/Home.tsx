import HeroSection from "../components/sections/HeroSection";
import CategoriesSection from "../components/sections/CategoriesSection";
import EssentialsSection from "../components/sections/EssentialsSection";
import BuildingsGrid from "../components/sections/BuildingsGrid";

const Home = () => {
  return (
    <>
      <HeroSection />

      <section className="section">
        <CategoriesSection />
      </section>

      <section className="section">
        <EssentialsSection />
      </section>

      <section className="section">
        <BuildingsGrid />
      </section>
    </>
  );
};

export default Home;
