import jwt from "jsonwebtoken";

export const refreshToken = async (req, res, next) => {
    try {
        const cookie = req.headers.cookie;
        let prevSplitToken = cookie.split('; ').find(row => row.startsWith('prex')).split('=')[1];
        console.log('\x1b[37m%s',prevSplitToken);

        if (!prevSplitToken) {
            return res.status(401).json({ message: "Authentication token required." })
        }
        jwt.verify(String(prevSplitToken), process.env.SECURE_ACCESS_KEY, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: "Authentication failed." });
            }
            res.clearCookie(`prex${decodedToken.id}`);
            // req.cookies[`prex${decodedToken.id}`] = "";
            // res.cookie(String('prex' + decodedToken.id), '', {
            //     path: '/',
            //     expires: new Date(0),
            //     httpOnly: true,
            //     sameSite: 'lax'
            // });

            // const accessToken = jwt.sign({ id: decodedToken.id }, process.env.SECURE_ACCESS_KEY, { expiresIn: '22m' });
            const accessToken = jwt.sign({ id: decodedToken.id }, process.env.SECURE_ACCESS_KEY, { expiresIn: '35s' });
            res.cookie(String('prex' + decodedToken.id), accessToken, {
                path: '/',
                // expires: new Date(Date.now() + 1000 * 1200), 
                expires: new Date(Date.now() + 1000 * 30),
                httpOnly: true,
                sameSite: 'lax'
            });
            req.id = decodedToken.id;
            next();
        });
    } catch (error) {
        console.log("refresh");
        return res.status(401).json({ message: error });
    }
}