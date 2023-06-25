import mongoose from 'mongoose';

const actorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        movies: { type: [String], required: false },
    },
    {
        timestamps: true,
    }
);
const Actor = mongoose.model('Actor', actorSchema);
export default Actor;