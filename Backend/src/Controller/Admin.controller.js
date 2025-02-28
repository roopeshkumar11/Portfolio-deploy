


import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Admin } from "../Models/Admin.models.js";


export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

   
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

   
    const newAdmin = new Admin({ email, password });
    await newAdmin.save();


    const token = newAdmin.generateToken();

    res.status(201).json({ message: "Admin registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email,password)
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

  
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }


    const token = admin.generateToken();

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const  logout=async(req,res)=>{
  res.clearCookie("token"); 

 
  res.status(200).json({ message: "Logged out successfully" })
}