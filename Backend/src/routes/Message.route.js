import express from "express";
import { getAllMessages, getsingledata, getsingledatadelete, sendMessage } from "../Controller/Message.controller.js";
import { authenticateAdmin } from "../middleware/Auth.middlware.js";

const RouterMessage = express.Router();

RouterMessage.post("/sendmessage", sendMessage);
RouterMessage.get("/getalldmessage",authenticateAdmin, getAllMessages);
RouterMessage.get("/singledata/:id",authenticateAdmin,getsingledata)
RouterMessage.delete("/deletedata/:id",authenticateAdmin,getsingledatadelete)

export default RouterMessage;
