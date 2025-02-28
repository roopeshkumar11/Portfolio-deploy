import dotenv from "dotenv"
import app from "./src/app.js"
import connectdb from "./src/Db/indexdb.js"


dotenv.config({

    path:"./src/.env"
})

connectdb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


