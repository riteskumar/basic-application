import mongoose from "mongoose";
import {getTasks} from "../controller/TaskControllers.js";
const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
})
const model = mongoose.model("Task",taskSchema);
export default model;
