import mongoose from "mongoose";

const connectDB = async () => mongoose.connect("mongodb://localhost:27017/NextJS_test");


export default connectDB;