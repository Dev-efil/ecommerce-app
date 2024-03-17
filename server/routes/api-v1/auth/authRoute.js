import express from 'express';
const router = express.Router();
import { registerUserHandle, getUserHandle, updateUserHandle, deleteUserHandle, loginUserHandle, logoutUserHandle } from '../../../controllers/authController.js';
import { verifyToken } from '../../../middlewares/verifyTokenMiddleware.js';
import { refreshToken } from '../../../middlewares/refreshTokenMiddleware.js';

router.post('/register', registerUserHandle);
router.post('/login', loginUserHandle);
router.get('/users/:id', getUserHandle);
router.put('/users/:id', updateUserHandle);
router.delete('/users/:id', deleteUserHandle);
router.post('/logout', verifyToken, logoutUserHandle);
router.get('/refresh', refreshToken, verifyToken, (req, res) => {
    return res.sendStatus(200);
});

export default router;