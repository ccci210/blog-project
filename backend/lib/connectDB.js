import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO;
    console.log(uri);
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
