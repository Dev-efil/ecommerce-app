import express from 'express';
const router = express.Router();
import { registerUserHandle, updateUserHandle, deleteUserHandle, loginUserHandle, logoutUserHandle } from '../../../controllers/authContoller.js';
import { verifyToken } from '../../../middleware/verifyToken.js';
import { refreshToken } from '../../../middleware/refreshToken.js';

router.post('/register', registerUserHandle);
router.post('/login', loginUserHandle);
router.put('users/:id', updateUserHandle);
router.delete('users/:id', deleteUserHandle);
router.post('/logout', verifyToken, logoutUserHandle);
router.get('/refresh', refreshToken, verifyToken, (req, res) => {
    return res.sendStatus(200);
});

export default router;