import express from "express"
import { loginAdmin, logout, registerAdmin } from "../Controller/Admin.controller.js";


const RouterAdmin=express.Router();


RouterAdmin.post("/adminregister",registerAdmin);
RouterAdmin.post("/loginadmin",loginAdmin);
RouterAdmin.post("/logout",logout);

export default RouterAdmin;