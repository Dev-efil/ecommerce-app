import express from 'express';
const router = express.Router();
import { handleRegister, handleLogin, handleRefresh, handleLogout } from '../../../controllers/authContoller.js';
import { verifyToken } from '../../../middleware/verifyToken.js';
import { refreshToken } from '../../../middleware/refreshToken.js';


router.get('/order', refreshToken, verifyToken);


export default router;