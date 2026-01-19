import { Link } from "react-router-dom";
import { type Building } from "../../types/building";
import { highlightMatch } from "../../utils/highlight";
import { MapPin } from "lucide-react";

interface Props {
  building: Building;
  searchQuery?: string;
}

const BuildingCard = ({ building, searchQuery = "" }: Props) => {
  return (
    <Link
      to={`/buildings/${building.id}`}
      className="card card-hover block transition hover:-translate-y-0.5 active:scale-[0.98] hover:no-underline"
    >
      <div className="h-40 w-full overflow-hidden">
        <img
          src={building.images[0] || "/images/placeholder.webp"}
          alt={building.name}
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.webp";
          }}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-3 flex flex-col gap-1 hover:no-underline">
        <h3 className="font-semibold text-sm">{highlightMatch(building.name, searchQuery)}</h3>

        <span className="text-xs py-1 rounded">{highlightMatch(building.category, searchQuery)}</span>

        {building.nearby && (
          <p className="text-xs text-text-muted flex items-center gap-1"><MapPin size={12} color="#930101"/>Near {highlightMatch(building.nearby, searchQuery)}</p>
        )}

        {/* {building.departments && (
          <div className="flex gap-1 flex-wrap mt-1">
            {building.departments.map((dep) => (
              <span key={dep} className="text-xs py-0.5 px-1 rounded bg-accent/10">
                {highlightMatch(dep, searchQuery)}
              </span>
            ))}
          </div>
        )} */}

        {building.roomGroups && (
          <div className="flex gap-1 flex-wrap mt-1">
            {building.roomGroups.map((rg) => (
              <span key={rg.label} className="text-xs py-0.5 px-1 rounded border bg-primary/10">
                {highlightMatch(rg.label, searchQuery)}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default BuildingCard;
