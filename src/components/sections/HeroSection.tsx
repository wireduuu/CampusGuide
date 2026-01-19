const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/buildings/aerial-view.jpg"
        preload="auto"
      />

      {/* Dark overlay with responsive opacity */}
      <div className="absolute inset-0 bg-black/80 sm:bg-black/85 md:bg-black/90 lg:bg-black/95 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 flex flex-col items-center text-center gap-6 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Find your way around campus
        </h1>

        <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-lg">
          Locate lecture halls, departments, and essential buildings without asking around or getting lost.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="#buildings"
            className="btn bg-background text-primary hover:bg-accent/80 hover:no-underline transition-transform hover:scale-105"
          >
            Explore Buildings
          </a>

          <a
            href="#essentials"
            className="btn bg-background text-primary hover:bg-accent/80 hover:no-underline transition-transform hover:scale-105"
          >
            View Essentials
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
