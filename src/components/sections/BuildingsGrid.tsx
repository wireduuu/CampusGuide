import { useState } from "react";
import buildings from "../../data/buildings";
import { categories } from "../../data/categories";
import BuildingCard from "../ui/BuildingCard";
import SearchInput from "../ui/SearchBar";
import { type BuildingCategory } from "../../types/building";

const BuildingsGrid = () => {
  const [activeCategory, setActiveCategory] =
    useState<BuildingCategory | "All">("All");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredBuildings = buildings.filter((building) => {
    const matchesCategory =
      activeCategory === "All" ||
      building.category === activeCategory;

    if (!searchQuery.trim()) {
      return matchesCategory;
    }

    const searchableText = [
      building.name,
      building.location,
      building.nearby,
      ...(building.departments ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return (
      matchesCategory &&
      searchableText.includes(searchQuery.toLowerCase())
    );
  });

  return (
    <section
      id="buildings"
      className="max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Search */}
      <div className="mb-6">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 mb-4 w-full justify-between items-center overflow-x-auto">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-3 rounded-md py-1.5 whitespace-nowrap transition w-full ${
            activeCategory === "All"
              ? "bg-primary text-white"
              : "hover:bg-primary/10"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 rounded-md py-1.5 whitespace-nowrap transition w-full ${
              activeCategory === cat
                ? "bg-primary text-white"
                : "hover:bg-primary/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      {filteredBuildings.length === 0 ? (
        <p className="text-sm text-text-muted text-center py-12">
          No buildings match your search.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredBuildings.map((building) => (
            <BuildingCard
              key={building.id}
              building={building}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BuildingsGrid;
