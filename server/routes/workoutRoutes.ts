import express, { Router } from 'express';
import { Request, Response } from 'express';
import { workoutController } from '../controllers/workoutController';

const router: Router = express.Router();

router.get(
  '/',
  workoutController.getWorkouts,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals['workoutList']);
  }
);

router.get('/:workoutName', () => {});

export { router as workoutRouter };
