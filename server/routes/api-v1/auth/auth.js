import express from 'express';
const router = express.Router();
import { handleRegister, handleLogin, handleLogout } from '../../../controllers/authContoller.js';
import { verifyToken } from '../../../middleware/verifyToken.js';
import { refreshToken } from '../../../middleware/refreshToken.js';

router.post('/register', handleRegister);
router.post('/login', handleLogin);
router.get('/refresh', refreshToken, verifyToken, (req, res) => {
    return res.sendStatus(200);
});
router.post('/logout', verifyToken, handleLogout);

export default router;