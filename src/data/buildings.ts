import { type Building } from "./../types/building";

const buildings: Building[] = [
  {
    id: 1,
    name: "Engineering Block",
    category: "Faculty",
    departments: ["Computer Engineering", "Electrical Engineering"],
    location: "Opposite the Main Library",
    nearby: "Main Library",
    images: ["/images/buildings/engineering.jpg"],
  },
  {
    id: 2,
    name: "Main Library",
    category: "Facility",
    location: "Near the central roundabout",
    images: ["/images/buildings/library.jpg"],
  },
];

export default buildings;
