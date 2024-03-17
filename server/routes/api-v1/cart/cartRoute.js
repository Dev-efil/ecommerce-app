import express from 'express';
const router = express.Router();
import { createCartHandle, getCartHandle, updateCartHandle, deleteCartHandle } from '../../../controllers/cartController.js';

router.post('/', createCartHandle);
router.get('/:id', getCartHandle);
router.put('/:id', updateCartHandle);
router.delete('/:id', deleteCartHandle);

export default router;