const categories = [
  "Faculties",
  "Lecture Halls",
  "Offices",
  "Facilities",
];

const CategoriesSection = () => {
  return (
    <section className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {categories.map(category => (
          <div
            key={category}
            className="card card-hover p-4 text-center cursor-pointer"
          >
            <p className="font-medium text-sm">{category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
