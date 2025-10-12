import express from 'express';
import cors from 'cors';
import pino from "pino-http";
import studentRouter from "./routers/students.js";
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//     console.log(`Time: ${new Date().toLocaleString()}`);
//     next();
// });
app.use(
    pino({
        transport: {
            target: 'pino-pretty',
        },
    }),
);

app.use(studentRouter);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;

