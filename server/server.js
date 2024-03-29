import express from 'express';
import dotenv from 'dotenv';
const server = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connection from './config/dbConfig.js';

import auth from './routes/api-v1/auth/authRoute.js';
import carts from './routes/api-v1/cart/cartRoute.js';
import products from './routes/api-v1/product/productRoute.js';
import orders from './routes/api-v1/order/orderRoute.js';
import wishLists from './routes/api-v1/wishList/wishListRoute.js';
// import payments from './routes/api-v1/payment/checkoutRoute.js';

// Load environment variables
dotenv.config();

connection();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors({ credentials: true }));
server.use(cookieParser());

server.use('/api/v1/auth', auth);
server.use('/api/v1/carts', carts);
server.use('/api/v1/products', products);
server.use('/api/v1/orders', orders);
server.use('/api/v1/wishlists', wishLists);
// server.use('/api/v1/payments', payments);

const PORT = process.env.PORT || 3500;

server.listen(PORT, ()=> { console.log('\x1b[32m%s\x1b[37m',`Server started on port : ${PORT}`)});