import express from "express";
import connectDB from "./connectdb.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./Routes/user.js"
import productRouter from "./Routes/routerProduct.js"
import cartRouter from "./Routes/cart.js"
import addressRouter from "./Routes/address.js"
import cors from "cors";
const app = express();
dotenv.config()

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
// user router api
app.use("/api/user", userRouter);
//product api
app.use("/api/product", productRouter);
//card Router
app.use("/api/cart", cartRouter)
app.use("/api/address", addressRouter)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`server is port at ${PORT}`)
})
app.get("/", (req, res) => {
    res.send({ message: "hlo sarfaraz" })
})

