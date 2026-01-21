const ExploreSection = () => {
  return (
    <section className="py-14 md:py-24 px-4 bg-gradient-to-b from-background to-accent/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10">
        {/* Text Column */}
        <div className="md:w-1/2 flex flex-col justify-start md:gap-4 order-1">
          <h2 className="section-title mb-1">Explore the Campus</h2>

          {/* Mobile brief text */}
          <p className="text-sm text-[rgb(var(--color-text-muted))] md:hidden">
            This video walkthrough provides helpful visual guidance for locating
            key areas and understanding the campus layout.
          </p>

          {/* tablet text */}
          <div className="hidden md:flex lg:hidden flex-col gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base text-[rgb(var(--color-text-muted))]">
                This video walkthrough provides helpful visual guidance for
                locating key areas and understanding the campus layout. From
                lecture halls to faculties and essential offices, this guide
                will help you quickly familiarize yourself with the campus
                environment and gain a clearer sense of how different parts of
                the campus connect.
              </p>
            </div>

            {/* tablet CTA at bottom of text */}
            <div className="flex gap-3 flex-wrap">
              <a href="#buildings" className="btn btn-primary">
                Explore Buildings
              </a>
              <a href="#essentials" className="btn btn-secondary">
                View Essentials
              </a>
            </div>
          </div>

          {/* Desktop text */}
          <div className="hidden lg:flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base text-[rgb(var(--color-text-muted))]">
                This video walkthrough provides helpful visual guidance for
                locating key areas and understanding the campus layout. From
                lecture halls to faculties and essential offices, this guide
                will help you quickly familiarize yourself with the campus
                environment and gain a clearer sense of how different parts of
                the campus connect.
              </p>

              <p className="text-sm md:text-base text-[rgb(var(--color-text-muted))]">
                Whether you are a new student, a returning student, or a
                visitor, the walkthrough offers a practical overview of
                important landmarks and frequently visited locations across
                campus.
              </p>
            </div>

            {/* Desktop CTA at bottom of text */}
            <div className="flex gap-3 flex-wrap">
              <a href="#buildings" className="btn btn-primary">
                Explore Buildings
              </a>
              <a href="#essentials" className="btn btn-secondary">
                View Essentials
              </a>
            </div>
          </div>
        </div>

        {/* Video Column */}
        <div className="md:w-1/2 w-full order-2">
          <div className="card w-full rounded-xl overflow-hidden shadow-md">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/B26vFcxYwU4?start=510"
                title="Campus walkthrough video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div
              className="px-4 py-3 border-t"
              style={{ borderColor: "rgb(var(--color-border))" }}
            >
              <small className="text-[rgb(var(--color-text-muted))]">
                Video courtesy of{" "}
                <a
                  href="https://youtube.com/@Aerial_Shot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:text-primary"
                >
                  Aerial Shot
                </a>{" "}
                on YouTube.
              </small>
            </div>
          </div>
        </div>

        {/* Mobile CTA after video */}
        <div className="flex gap-3 flex-wrap mt-2 md:hidden order-3">
          <a href="#buildings" className="btn btn-primary">
            Explore Buildings
          </a>
          <a href="#essentials" className="btn btn-secondary">
            View Essentials
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
