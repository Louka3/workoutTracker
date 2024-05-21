import fs from 'fs';
import path from 'path';
import { Workouts } from '../types/workoutTypes';

const dbPath: string = path.join(__dirname, '../db/data.json');

export const getParsedData = (): Workouts => {
  const jsonData = fs.readFileSync(dbPath, 'utf-8');
  const workouts: Workouts = JSON.parse(jsonData);
  return workouts;
};
