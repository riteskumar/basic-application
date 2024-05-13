import { Router } from "express";
import { getTasks, updateTasks, deleteTasks , saveTasks } from "../controller/TaskControllers.js";
import axios from "axios"
const routes = Router()

routes.get("/get",getTasks);
routes.post("/save",saveTasks);
routes.put("/update/:id",updateTasks);
routes.delete("/delete/:id",deleteTasks);
export default routes;