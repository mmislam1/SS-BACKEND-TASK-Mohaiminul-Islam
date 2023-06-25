import mongoose from 'mongoose';

const producerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        movies: { type: [String], required: false },
    },
    {
        timestamps: true,
    }
);
const Producer = mongoose.model('Producer', producerSchema);
export default Producer;