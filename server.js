import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import movieRouter from './routes/moviesRouter.js';
import userRouter from './routes/userRouter.js';



dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL);

app.use('/api/users', userRouter);
app.use('/api/movie', movieRouter);

const port = process.env.PORT;


app.listen(port, () => { console.log(`Serve at http://localhost:${port}`) })
