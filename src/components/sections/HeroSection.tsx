import SearchBar from "./../../components/ui/SearchBar";

const HeroSection = () => {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">
          Find your way around campus
        </h1>

        <p className="text-sm opacity-90 mb-6 max-w-md">
          Locate lecture halls, departments, and essential buildings without
          asking around or getting lost.
        </p>

        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
