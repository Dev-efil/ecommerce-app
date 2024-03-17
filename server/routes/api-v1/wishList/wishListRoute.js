import express from 'express';
const router = express.Router();
import { handleWishlist} from '../../../controllers/wishListController.js';
import { verifyToken } from '../../../middlewares/verifyTokenMiddleware.js';
// import { refreshToken } from '../../../middleware/refreshTokenMiddleware.js';


router.get('/wishlist', verifyToken, handleWishlist);


export default router;