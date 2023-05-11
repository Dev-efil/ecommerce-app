import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try {
        const cookie = req.headers.cookie;
        let splitToken = cookie.split('; ').find(row => row.startsWith('prex')).split('=')[1];
        if (!splitToken) {
            return res.status(401).json({ message: "Token required for authentication." })
        }
        jwt.verify(String(splitToken), process.env.SECURE_ACCESS_KEY, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: "Token is not valid." });
            }
            next();
        });
    } catch (error) {
        return res.status(401).json({ Error: error });
    }
};