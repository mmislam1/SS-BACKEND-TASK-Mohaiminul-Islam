import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        director: { type: mongoose.Schema.Types.ObjectID, ref: 'Director' },
        producer: { type: mongoose.Schema.Types.ObjectID, ref: 'Producer' },
        actors: { type: [mongoose.Schema.Types.ObjectID], ref: 'Actor' },
        details: { type: String, required: false },
        run_time: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);
const Movie = mongoose.model('Movie', movieSchema);
export default Movie;