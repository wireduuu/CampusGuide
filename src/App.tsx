import HeroSection from "./components/sections/HeroSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import EssentialsSection from "./components/sections/EssentialsSection";
import BuildingsGrid from "./components/sections/BuildingsGrid";

function App() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CategoriesSection />
      <EssentialsSection />
      <BuildingsGrid />
    </main>
  );
}

export default App;
