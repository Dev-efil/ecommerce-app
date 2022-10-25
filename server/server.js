const express = require('express');
const server = express();
const dotenv = require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const cors = require('cors');
const connection = require('./config/dbConfig');

connection();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.get('/test', (req, res) => {
    return res.status(200).json({ message: "Successfully" });
});
server.post('/payment', async (req, res) => {
    const {id , amount} = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "CAD",
            description: "item company",
            payment_method: id,
            confirm: true
        })
        console.log('payment', payment);
        res.json({
            message : 'Payment Successful',
            success: true
        });
    } catch (error) {
        console.log('payment :', error);
        res.json({
            message : 'Payment failed',
            success: false
        });
    }
});


const PORT = process.env.PORT || 3500;

server.listen(PORT, ()=> { console.log(`Server started on port : ${PORT}`)});