import { type Building } from "./../../types/building";

interface Props {
  building: Building;
}

const BuildingCard = ({ building }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={building.images[0]}
        alt={building.name}
        className="h-40 w-full object-cover"
      />

      <div className="p-3">
        <h3 className="font-semibold text-sm">
          {building.name}
        </h3>

        <span className="text-xs text-primary">
          {building.category}
        </span>
      </div>
    </div>
  );
};

export default BuildingCard;
