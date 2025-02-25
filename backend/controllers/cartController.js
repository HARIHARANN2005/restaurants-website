import userModel from "../models/userModel.js";

// Add items to user cart
const addToCart = async (req, res) => {
   try {
      const userData = await userModel.findById(req.user._id); // Access user via req.user
      let cartData = userData.cartData || {}; // Ensure cartData exists or initialize it

      if (!cartData[req.body.itemId]) {
         cartData[req.body.itemId] = 1;
      } else {
         cartData[req.body.itemId] += 1;
      }

      // Update the user's cart data
      await userModel.findByIdAndUpdate(req.user._id, { cartData });

      res.json({ success: true, message: "Added To Cart" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
   }
}

// Remove items from user cart
const removeFromCart = async (req, res) => {
   try {
      const userData = await userModel.findById(req.user._id); // Access user via req.user
      let cartData = userData.cartData;

      if (cartData[req.body.itemId] > 0) {
         cartData[req.body.itemId] -= 1;
      }

      // Update the user's cart data
      await userModel.findByIdAndUpdate(req.user._id, { cartData });

      res.json({ success: true, message: "Removed From Cart" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
   }
}

// Fetch user cart data
const getCart = async (req, res) => {
   try {
      const userData = await userModel.findById(req.user._id); // Access user via req.user
      const cartData = userData.cartData || {}; // Ensure cartData exists

      res.json({ success: true, cartData });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
   }
}

export { addToCart, removeFromCart, getCart };


