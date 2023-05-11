import Wishlist from "../model/wishListModel.js";

export const handleWishlist = async (req, res) => {
    const { userId } = req.body;
    console.log('here');
    return res.status(200).json({name: 'thanu'});
    // try {
    //     const existingUser = await wishlist.findOne({ userId });
    //     if (!existingUser) {
    //         return res.sendStatus(400);
    //     }

    //     const user = await User({
    //         name,
    //         email,
    //         password: hashedPassword
    //     });
    //     await user.save();

    //     return res.sendStatus(200);
    // } catch (error) {
    //     return res.sendStatus(500);
    // }
}
