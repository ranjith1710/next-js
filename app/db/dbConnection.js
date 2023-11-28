import {connect} from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/abdul';

const connectDB = async () => {
  try {
    await connect(MONGODB_URI)} 
    catch (error) {
    console.error("Error connecting to MongoDB:", error);
    }
};

connectDB();

export default connectDB;
