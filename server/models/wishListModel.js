import mongoose from 'mongoose';

/* wish list */
const wishListSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
}, { timestamps: true });

const wishList = mongoose.model('wishLists', wishListSchema);


/* wish list details */
const wishListDetailSchema = new mongoose.Schema({
    wishlistId: { type: mongoose.Schema.Types.ObjectId, ref: 'wishLists' },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
}, { timestamps: true });

const wishListDetail = mongoose.model('wishListDetails', wishListDetailSchema);


export { wishList, wishListDetail };