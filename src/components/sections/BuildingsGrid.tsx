import { useState } from "react";
import buildings from "../../data/buildings";
import { categories } from "../../data/categories";
import BuildingCard from "../ui/BuildingCard";
import SearchInput from "../ui/SearchBar";
import { type BuildingCategory } from "../../types/building";
import { MapPinOff } from "lucide-react";
import EmptyState from "../ui/EmptyState";

const BuildingsGrid = () => {
  const [activeCategory, setActiveCategory] = useState<BuildingCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBuildings = buildings.filter((building) => {
    const matchesCategory = activeCategory === "All" || building.category === activeCategory;

    if (!searchQuery.trim()) return matchesCategory;

    const query = searchQuery.toLowerCase();

    const searchableText = [
      building.name,
      building.location,
      building.nearby,
      ...(building.departments ?? []),
      ...(building.rooms?.map((r) => r.code) ?? []),
      ...(building.roomGroups?.flatMap((rg) => rg.codes) ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return matchesCategory && searchableText.includes(query);
  });

  return (
    <section id="buildings" className="mx-auto scroll-mt-20 bg-gradient-to-t from-background to-accent/30">
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-20">
        <h2 className="text-lg font-semibold mb-4">Lecture Buildings & Facilities</h2>

        <div className="mb-6">
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 mb-4 w-full items-center overflow-x-auto no-scrollbar pb-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-3 rounded-md py-1.5 whitespace-nowrap transition w-full bg-accent/20 ${
              activeCategory === "All" ? "bg-primary text-white" : "hover:bg-primary/10"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 rounded-md py-1.5 whitespace-nowrap transition w-full bg-accent/20 ${
                activeCategory === cat ? "bg-primary text-white" : "hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredBuildings.length === 0 ? (
          <EmptyState
            icon={<MapPinOff size={28} className="text-[rgb(var(--color-primary))]" />}
            title="No buildings found"
            description={
              searchQuery
                ? `We couldn’t find any buildings matching “${searchQuery}”.`
                : "There are no buildings in this category yet."
            }
          />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredBuildings.map((building) => (
              <BuildingCard key={building.id} building={building} searchQuery={searchQuery} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BuildingsGrid;
