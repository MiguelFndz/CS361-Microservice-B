import "dotenv/config";
import express, { NextFunction, Request, Response } from 'express';
import exercisesRoutes from './routes/exercise-route'
import morgan from 'morgan';
import createHttpError, { isHttpError } from "http-errors";
import cors from 'cors';

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/exercises", exercisesRoutes);

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An unknown error occured.";
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.Message;
    }
    res.status(statusCode).json({ error: errorMessage });
});

export default app;