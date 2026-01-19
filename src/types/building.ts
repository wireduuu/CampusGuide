export type BuildingCategory =
  | "Faculty"
  | "Lecture Hall"
  | "Office"
  | "Facility";

export interface Room {
  code: string; // the actual room code
  capacity?: number;
  notes?: string;
}

export interface RoomGroup {
  label: string; // what is displayed in the UI: "LH 1-9"
  codes: string[]; // all room codes this group includes
}

export interface Building {
  id: number;
  name: string;
  category: BuildingCategory;
  departments?: string[];
  location: string;
  nearby?: string;
  images: string[];
  rooms?: Room[]; // optional raw rooms
  roomGroups?: RoomGroup[]; // optional grouped rooms for display/search
}
