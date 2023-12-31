import jwt from 'jsonwebtoken';


export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAuthor: user.isAuthor,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d',
        }
    );
};

export const isAuth = (req, res, next) => {
    const token = req.cookies.token
    if (token) {

        jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: 'Invalid Token' });
                } else {
                    req.user = decode;
                    next();
                }
            }
        );
    } else {
        res.status(401).send({ message: 'No Token' });
    }
};

