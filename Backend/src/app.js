import cors from "cors";
import express from "express";
import RouterMessage from "./routes/Message.route.js";
import RouterAdmin from "./routes/Admin.routes.js";
import AdminMessage from "./routes/Adminmessage.route.js";

const app = express();


app.use(cors());


app.use(express.json());



app.use("/api",RouterMessage)
app.use("/api/admin",RouterAdmin)
app.use("/api/adminmsg",AdminMessage)

export default app;
