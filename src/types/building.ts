export interface Building {
  id: number;
  name: string;
  category: 'Faculty' | 'Lecture Hall' | 'Office' | 'Facility';
  departments?: string[];
  location: string;
  nearby?: string;
  images: string[];
}
