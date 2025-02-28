import jwt from "jsonwebtoken"
import { Admin } from "../Models/Admin.models.js";
export const authenticateAdmin = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    console.log("Auth Header:", authHeader);

    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized: No Authorization header" });
    }

    const token = authHeader.split(" ")[1];
    console.log("Extracted Token:", token); 

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decoded Token:", decoded); 

    const admin = await Admin.findById(decoded.id).select("-password");
    if (!admin) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.admin = admin;
    next();
  } catch (error) {
    console.error("Token Verification Error:", error); 
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
