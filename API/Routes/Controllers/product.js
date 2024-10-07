import { Product } from "../Models/Product.js";
//ADD PRODUCT
export const addProduct = async (req, res) => {
    try {
        const { tittle, description, price, category, qty, imgSrc, } = req.body;
        const product = new Product({
            tittle,
            description,
            price,
            category,
            qty,
            imgSrc,
        })
        await product.save();

        // const product = await Product.create({
        //     tittle,
        //     description,
        //     price,
        //     category,
        //     qty,
        //     imgSrc,
        // });
        // res.json({ message: "product created succesfully", product });
        res.json({ message: "product created succesfully", product });
    } catch (error) {
        console.log(error)
    }
}
//GET PRODUCT
export const getData = async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({ message: "got all data", products });
}

//FIND PRODUCT BY ID

export const getDataById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
        return res.json({ message: "invalid Id" })
    }
    res.json({ message: "specific product", product });
}
//UPDATE PRODUCT

export const updateData = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true })
    if (!product) {
        return res.json({ message: "invalid Id" })
    }
    res.json({ message: "specific product has been updated", product })
}
//DELETE PRODUCT


export const deleteData = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id)
    if (!product) {
        return res.json({ message: "invalid Id" })
    }
    res.json({ message: "specific product has been deleted", product })
}