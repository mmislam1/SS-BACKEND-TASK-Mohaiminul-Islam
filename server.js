import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';



dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL);



const port = process.env.PORT;


app.listen(port, () => { console.log(`Serve at http://localhost:${port}`) })
