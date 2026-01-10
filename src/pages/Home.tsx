import HeroSection from "./../components/sections/HeroSection";
import EssentialsSection from "./../components/sections/EssentialsSection";
import BuildingsGrid from "./../components/sections/BuildingsGrid";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <EssentialsSection />
      <BuildingsGrid />
    </main>
  );
};

export default Home;
