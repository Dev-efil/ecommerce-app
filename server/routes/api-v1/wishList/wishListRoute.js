import express from 'express';
const router = express.Router();
import { handleWishlist} from '../../../controllers/wishListController.js';
import { verifyToken } from '../../../middleware/verifyToken.js';
import { refreshToken } from '../../../middleware/refreshToken.js';


router.get('/wishlist', verifyToken, refreshToken, handleWishlist);


export default router;