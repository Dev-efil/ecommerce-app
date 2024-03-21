import mongoose from 'mongoose';

/* user */
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, default: null },
    dateOfBirth: { type: Date, default: null },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    lastLoginDate: { type: Date }
}, { timestamps: true });

const user = mongoose.model('users', userSchema);


/* address */
const addressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
    isBilling: { type: Boolean, default: false },
    isShipping: { type: Boolean, default: false }
}, { timestamps: true });

const address = mongoose.model('addresses', addressSchema);


export { user, address };