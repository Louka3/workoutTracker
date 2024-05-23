import { Request, Response, NextFunction } from 'express';
import { getWorkoutsService, listWorkouts } from '../services/workoutService';
import { getData } from '../services/getDataService';

const workoutController = {
  getWorkouts: (req: Request, res: Response, next: NextFunction) => {
    const workoutData = getWorkoutsService(getData());
    res.locals['workoutList'] = listWorkouts(workoutData);
    next();
  },
};

export { workoutController };
