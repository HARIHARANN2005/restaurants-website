import mongoose from "mongoose";

// Define the food schema
const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
});

// Use the existing model if it's already defined, otherwise create a new one
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
