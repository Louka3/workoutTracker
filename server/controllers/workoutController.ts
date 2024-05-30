import { Request, Response, NextFunction } from 'express';
import {
  getWorkoutService,
  getWorkoutsService,
  listWorkouts,
} from '../services/workoutService.js';
import { getData } from '../services/getDataService.js';
import { Workout, Workouts } from '../types/workoutTypes.js';

const workoutController = {
  getWorkouts: (req: Request, res: Response, next: NextFunction) => {
    const workoutData = getWorkoutsService(getData());
    res.locals['workoutList'] = listWorkouts(workoutData);
    next();
  },

  getWorkout: (req: Request, res: Response, next: NextFunction) => {
    // decoded the url, then used that decoded url to look up the workout by its name.
    const decodedURI: string = decodeURIComponent(
      req.params['workoutName']
    ).toLowerCase();
    const data: Workouts = getWorkoutsService(getData());
    const workoutData: Workout = getWorkoutService(decodedURI, data);

    res.locals['workoutData'] = workoutData;
    next();
  },
};

export { workoutController };
