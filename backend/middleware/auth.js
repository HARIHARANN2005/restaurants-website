import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    // Get token from Authorization header
    const { token } = req.headers;

    // If there's no token, respond with an error message
    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login Again." });
    }

    try {
        // Verify the token and decode it to extract user data
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the user ID to req.body (keeping the original logic)
        req.body.userId = token_decode.id;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error: Invalid Token" });
    }
};

export default authMiddleware;
