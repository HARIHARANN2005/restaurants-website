import mongoose from "mongoose";
 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hariharaan20:yOxfB3st4sRQlqYU@cluster0.rwanb.mongodb.net/food-del').then(()=>console.log("DB connected"));
}