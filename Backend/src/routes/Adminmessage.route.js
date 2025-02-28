import express from "express"

import { Adminmessage } from "../Controller/Adminmessagesend.controller.js";

const AdminMessage=express.Router();


AdminMessage.post("/adminmessage",Adminmessage);


export default AdminMessage;