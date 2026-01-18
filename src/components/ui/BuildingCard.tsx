import { Link } from "react-router-dom";
import { type Building } from "../../types/building";

interface Props {
  building: Building;
}

const BuildingCard = ({ building }: Props) => {
  return (
    <Link
      to={`/buildings/${building.id}`}
      className="card card-hover block transition
                 hover:-translate-y-0.5 active:scale-[0.98] hover:no-underline"
    >
      {/* Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={building.images[0] || "/images/placeholder.webp"}
          alt={building.name}
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.webp";
          }}
          className="h-full w-full object-cover transition-transform
                     duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-3 space-y-1 hover:no-underline">
        <h3 className="font-semibold text-sm leading-tight">
          {building.name}
        </h3>

        <span className="text-xs py-1 rounded">
          {building.category}
        </span>

        {building.nearby && (
          <p className="text-xs text-text-muted">
            Near {building.nearby}
          </p>
        )}
      </div>
    </Link>
  );
};

export default BuildingCard;
