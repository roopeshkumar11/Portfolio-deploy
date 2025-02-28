import mongoose from "mongoose";
import { DB_name } from "./Dbname.js";

const connectdb = async () => {
    console.log("process.env.URL", process.env.URL);

    try {
        const connectinstance = await mongoose.connect(`${process.env.URL}/${DB_name}`);
        console.log(`MongoDB connected || db Host: ${connectinstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};

export default connectdb;
