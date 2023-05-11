import mongoose from 'mongoose';

const wishListSchema = new mongoose.Schema({
    productId: { type: String, ref: 'Product', required: true },
    userId: { type: String, ref: 'User', required: true}
}, { timestamps: true });

export default mongoose.model('wishList', wishListSchema);