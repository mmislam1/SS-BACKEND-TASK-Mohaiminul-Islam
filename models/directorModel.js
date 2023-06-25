import mongoose from 'mongoose';

const directorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        movies:{type: [String], required: false},
    },
    {
        timestamps: true,
    }
);
const Director = mongoose.model('Director', directorSchema);
export default Director;