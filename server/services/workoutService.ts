import fs from 'fs';
import path from 'path';
import { Workout, Workouts } from '../types/workoutTypes';

export const getWorkoutsService = (workouts: Workouts): Workouts => {
  return workouts;
};

export const getWorkoutService = (workoutName: string, workouts: Workouts) => {
  return workouts[workoutName];
};

export const listWorkouts = (workouts: Workouts): Workout[] => {
  const workoutNames: string[] = Object.keys(workouts);
  const workoutArray: Workout[] = [];
  // for (let i = 0; i < workoutNames.length; i++) {
  //   workoutArray.push(workouts[workoutNames[i]]);
  // }
  workoutNames.forEach((name: string) => {
    workoutArray.push(workouts[name]);
  });

  return workoutArray;
};
