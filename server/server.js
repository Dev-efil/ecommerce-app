const express = require('express');
const server = express();
const cors = require('cors');
require('dotenv').config();
const connection = require('./config/dbConfig');
// const auth = require('./routes/api-v1/auth/login');
// const authRegister = require('./routes/api-v1/auth/register');
const paymentCheckout = require('./routes/api-v1/payment/checkout');

connection();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

// server.use('/api/v1/auth', auth);
// server.use('/api/v1/auth', authRegister);
server.use('/api/v1/payment', paymentCheckout);

const PORT = process.env.PORT || 3500;

server.listen(PORT, ()=> { console.log(`Server started on port : ${PORT}`)});