import express from 'express';
import dotenv from 'dotenv';
const server = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connection from './config/dbConfig.js';

import auth from './routes/api-v1/auth/auth.js';
import wishList from './routes/api-v1/wishList/wishList.js';
// const authRegister = require('./routes/api-v1/auth/register');
import paymentCheckout from './routes/api-v1/payment/checkout.js';

// Load environment variables
dotenv.config();

connection();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors({credentials: true, origin: 'http://localhost:3000'}));
server.use(cookieParser());

server.use('/api/v1/auth', auth);
server.use('/api/v1', wishList);
// server.use('/api/v1/auth', authRegister);
server.use('/api/v1/payment', paymentCheckout);

const PORT = process.env.PORT || 3500;

server.listen(PORT, ()=> { console.log('\x1b[32m%s\x1b[37m',`Server started on port : ${PORT}`)});