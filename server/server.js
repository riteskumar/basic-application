import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import routes from "./routes/TaskRoutes.js";

const app = express();
const PORT = 5000
const URI = `mongodb+srv://admin:admin@crud-application.wnwalsb.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-Application`
app.use(express.json());
app.use(cors());
app.use("/api",routes)
mongoose.connect(URI).then(()=>{
    console.log("MongoDB connected");
}).catch(()=>{
    console.log("Error in connecting");
})
app.listen(PORT,()=>console.log(`Listening at PORT ${PORT}`))