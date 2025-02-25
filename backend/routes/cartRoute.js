import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

// POST route for adding an item to the cart
cartRouter.post("/add", authMiddleware, addToCart);

// POST route for removing an item from the cart
cartRouter.post("/remove", authMiddleware, removeFromCart);

// GET route for fetching the user's cart data
cartRouter.get("/get", authMiddleware, getCart);  // Changed to GET method for retrieving cart data

export default cartRouter;

