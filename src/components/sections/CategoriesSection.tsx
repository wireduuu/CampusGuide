const categories = [
  "Faculties",
  "Lecture Halls",
  "Offices",
  "Facilities",
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="max-w-6xl mx-auto scroll-mt-20 px-4 py-10 bg-gradient-to-b from-background to-accent/30">
      <h2 className="text-lg font-semibold mb-4">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {categories.map(category => (
          <div
            key={category}
            className="card card-hover p-4 text-center cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-accent hover:text-white"
          >
            <p className="font-medium text-sm">{category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
