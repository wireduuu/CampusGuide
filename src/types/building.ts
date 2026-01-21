export type BuildingCategory =
  | "Faculty"
  | "Department"
  | "Lecture Hall"
  | "Office"
  | "Facility";

export type DataStatus = "confirmed" | "unconfirmed";

export interface RoomGroup {
  label: string;
  codes: string[];
  status?: DataStatus;
  notes?: string;
}

export interface Building {
  id: number;
  name: string;
  category: BuildingCategory;
  departments?: string[];
  location: string;
  nearby?: string;
  images: string[];
  roomGroups?: RoomGroup[];
  roomStatus?: DataStatus;
}
