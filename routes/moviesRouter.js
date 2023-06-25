import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Movie from '../models/movieModel.js';
import { isAuth } from '../utils.js'

const movieRouter = express.Router();

movieRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const movies = Movie.find({}).select('name')
        res.send(movies)

    }))

movieRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const movie = await Movie.findById(req.params.id).populate(
            director, producer, actors
        );
        if (movie) {
            res.send(movie);
        } else {
            res.status(404).send({ message: 'movie Not Found' });
        }
    })
);
movieRouter.post(
    '/createMovie',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const movie = new Movie({
            name: req.body.name,
            director: req.body.director,
            producer: req.body.producer,
            actors: req.body.actors,
            details: req.body.details,
            run_time: req.body.run_time,
        });
        const createdMovie = await Movie.save();
        res.send({ message: 'movie Created', movie: createdMovie });
    })
);

export default movieRouter;