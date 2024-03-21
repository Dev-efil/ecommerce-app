import mongoose from 'mongoose';

/* order */
const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    orderDate: { type: Date, default: Date.now },
    totalAmount: { type: Number },
}, { timestamps: true });

const order = mongoose.model('orders', orderSchema);


/* order details */
const orderDetailSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'orders' },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
    totalAmount: { type: Number },
}, { timestamps: true });

const orderDetail = mongoose.model('orderDetails', orderDetailSchema);


export { order, orderDetail };