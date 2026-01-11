import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
export default async function connectDB () {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected Successfully");
    } catch (error) {
        console.log("Database connection Unsuccessfully", error );
        process.exit(1);
    }
}