import mongoose from "mongoose";

const cardItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        require: true,
    },
    tittle: { type: String, require: true },
    price: { type: Number, require: true },
    imgSrc: { type: String, require: true },
    qty: { type: Number, require: true },

});

const cardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    items: [cardItemSchema],
})

export const Cart = mongoose.model("Cart", cardSchema);


