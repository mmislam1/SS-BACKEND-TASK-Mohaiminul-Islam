import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();


userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {

                generatedToken = generateToken(user)
                res.cookie('token', generatedToken).send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAuthor: user.isAuthor,
                    token: generatedToken,
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);

userRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        });
        const createdUser = await user.save();
        generatedToken = generateToken(user)
        res.cookie('token', generatedToken).send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAuthor: user.isAuthor,
            token: generatedToken,
        });
    })
);





export default userRouter;