import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js'

export const registerUserHandle = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.sendStatus(400);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User({
            name,
            email,
            password: hashedPassword
        });
        await user.save();

        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export const loginUserHandle = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return res.status(400).json({ message: 'User not found. Please register to login.' });
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }
        // const accessToken = await jwt.sign({ id: existingUser._id }, process.env.SECURE_ACCESS_KEY, { expiresIn: '22m' });
        const accessToken = await jwt.sign({ id: existingUser._id }, process.env.SECURE_ACCESS_KEY, { expiresIn: '35s' });
        // add secure = true in production 
        // res.cookie(String(existingUser._id), accessToken, { path: '/', expires: new Date(Date.now() + 1000 * 1800), httpOnly: true, sameSite: 'lax', secure: true });
        return res.cookie(String('prex' + existingUser._id), accessToken, { path: '/', expires: new Date(Date.now() + 1000 * 1200), httpOnly: true, sameSite: 'lax' }).status(200).json({ message: 'Successfully logged in.', accessToken });
    } catch (error) {
        return res.status(500).send(error);
    }
}

export const getUserHandle = async (req, res) => {
    const { id } = req.params;
    try {
        const existingUser = await User.findById(id);
        if (!existingUser) {
            return res.status(400).json({ message: 'No user found.' });
        }
        else {
            return res.status(200).json(existingUser);
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}

export const updateUserHandle = async (req, res) => {
    const { id } = req.params;
    const { email, name } = req.body;
    try {
        const existingUser = await User.updateOne({ id: id }, { $set: { name: name, email: email } });
        if (!existingUser) {
            return res.status(400).json({ message: 'Update is failed.' });
        }
        else {
            return res.status(200).json({ message: 'Update successfully.' });
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}

export const deleteUserHandle = async (req, res) => {
    const { id } = req.params;
    try {
        const existingUser = await User.deleteOne({ _id: id });
        console.log('existingUser', existingUser);
        if (!existingUser) {
            return res.status(400).json({ message: 'User not found.' });
        }
        else {
            return res.status(200).json({ message: 'User successfully deleted.' });
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}

export const logoutUserHandle = async (req, res) => {
    const cookie = req.headers.cookie;
    let prevSplitToken = cookie.split('; ').find(row => row.startsWith('prex')).split('=')[1];
    if (!prevSplitToken) {
        return res.status(401).json({ message: "Token required for authentication." })
    }
    jwt.verify(String(prevSplitToken), process.env.SECURE_ACCESS_KEY, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: "Token is not valid." });
        }
        res.clearCookie(`prex${decodedToken.id}`);
        req.cookie[`prex${decodedToken.id}`] = '';
        return res.status(200).json({ message: 'Successfully logged out.' });
    });
}