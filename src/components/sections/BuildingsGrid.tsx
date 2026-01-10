import buildings from "./../../data/buildings";
import BuildingCard from "./../../components/ui/BuildingCard";

const BuildingsGrid = () => {
  return (
    <section className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">
        All Campus Buildings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {buildings.map(building => (
          <BuildingCard
            key={building.id}
            building={building}
          />
        ))}
      </div>
    </section>
  );
};

export default BuildingsGrid;
