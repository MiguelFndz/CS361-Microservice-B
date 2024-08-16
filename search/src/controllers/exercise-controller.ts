import { RequestHandler } from "express";
import ExerciseModel from '../models/exercise-model'
import createHttpError from "http-errors";
import mongoose, { isValidObjectId } from 'mongoose';

export const getExercisesByTitle: RequestHandler = async (req, res, next) => {
    const title = req.params.title;
    console.log(title);
    try {
        const exercises = await ExerciseModel.aggregate([
            {
                "$match": {
                    "title": title,
                }
            }
        ]).exec()
        res.status(200).json(exercises);
    } catch (error) {
        next(error);
    }
}

export const sortExercisesByTitle: RequestHandler = async (req, res, next) => {
    console.log("Sorting exercises by title...");
    
    try {
        const exercises = await ExerciseModel.find().sort({ title: 1 }).exec();
        console.log("Sorted exercises:", exercises); // Debug log
        res.status(200).json(exercises);
    } catch (error) {
        console.error("Error fetching exercises:", error); // Debug log
        next(error);
    }
}

export const getExercises: RequestHandler =  async (req, res, next) => {
    try {
        const exercises = await ExerciseModel.find().exec();
        res.status(200).json(exercises);
    } catch (error) {
        next(error);
    }
}