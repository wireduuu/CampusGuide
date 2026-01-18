export type BuildingCategory =
  | "Faculty"
  | "Lecture Hall"
  | "Office"
  | "Facility";

export interface Building {
  id: number;
  name: string;
  category: BuildingCategory;
  departments?: string[];
  location: string;
  nearby?: string;
  images: string[];
}
