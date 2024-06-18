export interface Workout {
  name: string;
  force: string | null;
  level: string;
  mechanic: string | null;
  equipment: string | null;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  instructions: string[];
  category: string;
  images: string[];
  id: string;
}

// export interface Workouts {
//   [key: string]: Workout;
// }

export interface Workouts {
  items: Workout[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}
