import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    tittle: {
        type: String,
        rrequired: true
    },
    description: {
        type: String,
        rrequired: true
    },
    price: {
        type: Number,
        rrequired: true
    },
    category: {
        type: String,
        rrequired: true
    },
    qty: {
        type: Number,
        rrequired: true
    },
    imgSrc: {
        type: String,
        rrequired: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

});
export const Product = mongoose.model("Product", productSchema);