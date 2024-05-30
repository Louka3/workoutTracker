import fs from 'fs';
import { Workouts } from '../types/workoutTypes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const fileName: string = fileURLToPath(import.meta.url);
const dbPath: string = path.join(
  dirname(fileName),
  '../../../db/exercises_data.json'
);

export const getData = (): Workouts => {
  const jsonData = fs.readFileSync(dbPath, 'utf-8');
  const workouts: Workouts = JSON.parse(jsonData);
  return workouts;
};
