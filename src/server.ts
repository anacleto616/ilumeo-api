import 'express-async-errors';
import * as dotenv from 'dotenv';
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use(
  (
    error: ErrorRequestHandler,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message
      });
    }

    return response.sendStatus(500).json({
      status: 'error',
      message: `Internal server error - ${error}`
    });
  }
);

export { app };
