import express from 'express';
const router = express.Router();
import { createOrderHandle, getOrderHandle, getAllOrderHandle, updateOrderHandle, deleteOrderHandle } from '../../../controllers/orderController.js';

router.post('/', createOrderHandle);
router.get('/:id', getOrderHandle);
router.get('/', getAllOrderHandle);
router.put('/:id', updateOrderHandle);
router.delete('/:id', deleteOrderHandle);

export default router;