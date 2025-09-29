import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shivambehera:01112004@cluster0.e6tktn3.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}