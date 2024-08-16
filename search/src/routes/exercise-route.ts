import express from 'express';
import * as ExercisesController from '../controllers/exercise-controller';

const router = express.Router();

router.get("/:title", ExercisesController.getExercisesByTitle);

router.get("/sorted/title", ExercisesController.sortExercisesByTitle);

router.get("", ExercisesController.getExercises);

export default router;