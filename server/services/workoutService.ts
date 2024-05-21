import fs from 'fs';
import path from 'path';
import { Workouts } from '../types/workoutTypes';

export const getWorkoutsService = (workouts: Workouts): Workouts => {
  return workouts;
};

export const getWorkoutService = (workoutName: string, workouts: Workouts) => {
  return workouts[workoutName];
};
