import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: String,  // Changed from Number to String since addresses typically contain text
        required: true
    },
    status: {
        type: String,  // Removed duplicate status field
        default: "Food Processing"
    },
    date: {
        type: Date,    // Fixed 'date' to 'Date'
        default: Date.now  // Fixed 'date.now()' to 'Date.now'
    },
    payment: {
        type: Boolean,
        default: false
    }
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;