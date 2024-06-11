import express, { Router } from 'express';
import { Request, Response } from 'express';
import { workoutController } from '../controllers/workoutController.js';

const router: Router = express.Router();

router.get(
  '/',
  workoutController.getWorkouts,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals['workoutList']);
  }
);

router.get(
  '/:workoutName',
  workoutController.getWorkout,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals['workoutData']);
  }
);

export { router as workoutRouter };
