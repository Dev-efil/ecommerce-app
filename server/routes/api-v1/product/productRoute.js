import express from 'express';
const router = express.Router();
import { createProductHandle, getProductHandle, getAllProductHandle, updateProductHandle, deleteProductHandle } from '../../../controllers/productController.js';

router.post('/', createProductHandle);
router.get('/:id', getProductHandle);
router.get('/', getAllProductHandle);
router.put('/:id', updateProductHandle);
router.delete('/:id', deleteProductHandle);

export default router;