import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log("connection database");
        })
    } catch (error) {
        console.log("error occupied in db connection")
    }
}
export default connectDB;