import { Link, useParams } from "react-router-dom";
import buildings from "../data/buildings";
import { ChevronLeft, MapPin } from "lucide-react";

const BuildingDetail = () => {
  const { id } = useParams();

  const buildingId = Number(id);
  const building = buildings.find(
    (b) => b.id === buildingId
  );

  if (!building) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <p className="text-sm text-text-muted">
          Building not found.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 text-sm text-primary hover:underline"
        >
          <div className="flex gap-2">
            <ChevronLeft /> Back to buildings
          </div>
          
        </Link>
      </div>
    );
  }

  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <Link
        to="/#buildings"
        className="inline-block mb-4 text-sm text-primary hover:no-underline"
      >
        <div className="flex gap-2 items-center">
          <ChevronLeft size={18} /> Back to buildings
        </div>
      </Link>

      <div className="w-full aspect-[3/2] overflow-hidden rounded-lg mb-6">
        <img
          src={building.images[0] || "/images/placeholder.webp"}
          alt={building.name}
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.webp";
          }}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-2xl font-semibold mb-3">
        {building.name}
      </h1>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="tag">
          {building.category}
        </span>

        {building.nearby && (
          <span className="tag bg-accent/20 text-text-primary">
            Near {building.nearby}
          </span>
        )}
      </div>

      <p className="text-sm text-text-muted mb-6 flex items-center gap-2">
        <MapPin size={16} /> {building.location}
      </p>

      {building.departments && (
        <div>
          <h2 className="text-sm font-semibold mb-2">
            Departments / Offices
          </h2>
          <div className="flex flex-wrap gap-2">
            {building.departments.map((dep) => (
              <span key={dep} className="text-xs p-2 bg-primary/10 rounded">
                {dep}
              </span>
            ))}
          </div>
        </div>
      )}

      {building.rooms && (
      <div className="mt-6">
        <h2 className="text-sm font-semibold mb-2">Rooms</h2>
        <div className="flex flex-wrap gap-2">
          {building.rooms.map((room) => (
            <span
              key={room.code}
              className="text-xs py-1 px-2 rounded border bg-gray-100 dark:bg-gray-800"
            >
              {room.code}
            </span>
          ))}
        </div>
      </div>
    )}
    </section>
  );
};

export default BuildingDetail;
