import mongoose from 'mongoose';

/* cart */
const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
}, { timestamps: true });

const cart = mongoose.model('carts', cartSchema);


/* cart details */
const cartDetailSchema = new mongoose.Schema({
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'carts' },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
    quantity: { type: Number }
}, { timestamps: true });

const cartDetail = mongoose.model('cartDetails', cartDetailSchema);


export { cart, cartDetail };