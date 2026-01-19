import { type Building } from "../types/building";

const buildings: Building[] = [
  {
    id: 1,
    name: "FMMT Block",
    category: "Lecture Hall",
    departments: ["Mining Engineering", "Minerals Engineering"],
    location: "Adjacent FIMS Block",
    nearby: "School Clinic",
    images: ["/images/buildings/fmmt/fmmt.jpeg"],
    roomGroups: [
      { label: "SF 1-3", codes: ["SF1", "SF2", "SF3"] },
      { label: "GF 1-3", codes: ["GF1", "GF2", "GF3"] },
      { label: "FF 1-3", codes: ["FF1", "FF2", "FF3"] },
    ],
  },
  {
    id: 2,
    name: "FIMS Block",
    category: "Lecture Hall",
    departments: ["Technical Communication", "Management Studies"],
    location: "Adjacent FMMT Block",
    nearby: "School Clinic",
    images: ["/images/buildings/fims/fims2.jpeg"],
    roomGroups: [
      { label: "F1A1-3", codes: ["F1A1", "F1A2", "F1A3"] },
      { label: "F1B1-3", codes: ["F1B1", "F1B2", "F1B3"] },
      { label: "MS 1-2", codes: ["MS 1", "MS 2"] },
    ],
  },
  {
    id: 3,
    name: "GNPC / SPeTs Block",
    category: "Lecture Hall",
    departments: ["Petroleum Engineering and Natural Gas Engineering", "Petroleum Geosciences and Engineering", "Chemical and Petrochemical Engineering"],
    location: "In-between Main Library and Main Entrance",
    nearby: "Main Entrance",
    images: ["/images/buildings/gnpc-spets/gnpc-spets.jpeg"],
    roomGroups: [
      { label: "LH 1-9", codes: ["LH1","LH2","LH3","LH4","LH5","LH6","LH7","LH8","LH9"] },
    ],
  },
  {
    id: 4,
    name: "Mini Auditorium",
    category: "Lecture Hall", 
    location: "Near the second main entrance",
    nearby: "Second Main Entrance",
    images: ["/images/buildings/auditorium/mini.jpeg"],
    roomGroups: [
      { label: "Mini-Auditorium", codes: [""] },
    ],
  },
  {
    id: 5,
    name: "Main Auditorium",
    category: "Facility", 
    location: "Near Main Library",
    nearby: "Main Library",
    images: ["/images/buildings/auditorium/main.jpeg"],
    roomGroups: [
      { label: "Main Auditorium", codes: [""] },
    ],
  },
  {
    id: 6,
    name: "Main Library",
    category: "Facility", 
    location: "Near Main Auditorium",
    nearby: "Main Auditorium",
    images: ["/images/buildings/library/library.jpeg"],
    roomGroups: [
      { label: "Main Library", codes: [""] },
    ],
  },
  {
    id: 7,
    name: "Ransbet",
    category: "Facility", 
    location: "Near Main Auditorium Building",
    nearby: "Main Auditorium",
    images: ["/images/buildings/ransbet/ransbet.jpeg"],
  },
  {
    id: 8,
    name: "Founn Cafeteria",
    category: "Facility", 
    location: "Ground Floor, Ransbet Building",
    nearby: "Main Auditorium",
    images: ["/images/buildings/cafeteria/cafeteria.jpeg"],
  },
  
];

export default buildings;
