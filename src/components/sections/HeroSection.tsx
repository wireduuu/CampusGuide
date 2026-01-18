const HeroSection = () => {
  return (
    <section className="relative bg-primary text-white bg-[url('/images/buildings/aerial-view.jpg')] bg-cover bg-center min-h-[calc(100vh-4rem)] flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-12 flex flex-col items-center text-center gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Find your way around campus
        </h1>

        <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-lg">
          Locate lecture halls, departments, and essential buildings without asking around or getting lost.
        </p>

        

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#buildings" className="btn bg-background text-primary hover:bg-accent/80 hover:text-secondary hover:no-underline transition-transform hover:scale-105 duration-300">
            Explore Buildings
          </a>
          <a href="#essentials" className="btn bg-background text-primary hover:bg-accent/80 hover:text-primary hover:no-underline transition-transform hover:scale-105 duration-300">
            View Essentials
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
