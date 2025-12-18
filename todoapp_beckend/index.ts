import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import todoRouter from './router/todoRouter'

const app = express();
const mongoLink = 'mongodb://localhost:27017/todoApp'; 
const PORT = 200;


app.use(express.json())
app.use('/api/todos', todoRouter);

mongoose.connect(mongoLink)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to MongoDB. Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Cannot connect to the database:', error);
    });
