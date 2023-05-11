import express from 'express';
const router = express.Router();
import { checkout } from '../../../controllers/paymentController.js';

router.post('/checkout', checkout);

export default router;