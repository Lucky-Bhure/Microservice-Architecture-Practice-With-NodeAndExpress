import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Cart = mongoose.model("cart", cartSchema);

export default Cart;