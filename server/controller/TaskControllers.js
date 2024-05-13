import TaskModel from "../models/TaskModel.js"

export const getTasks = async(req ,res)=>{
    const tasks = await TaskModel.find()
    res.send(tasks) 
}
export const saveTasks = (req ,res)=>{
    const {task} = req.body
    TaskModel.create({task}).then((data)=>{
        console.log("Saved Successfully");
        res.status(201).send(data)
    }).catch((err)=>{
        console.log("Error: ",err);
        res.send({error:err , msg:"Something went wrong!!"})
    })
    
}

export const updateTasks = (req ,res)=>{
    const {id} = req.params
    const{task} = req.body;
    TaskModel.findByIdAndUpdate(id , {task})
    .then(()=>{
        res.send("Update Successfully");
    })
    .catch((err)=>{
        console.log("Error: ",err);
        res.send({error:err , msg:"Something went wrong!!"})
    })
    
}

export const deleteTasks = (req ,res)=>{
    const {id} = req.params
   
    TaskModel.findByIdAndDelete(id )
    .then(()=>{
        res.send("Deleted Successfully");
    })
    .catch((err)=>{
        console.log("Error: ",err);
        res.send({error:err , msg:"Something went wrong!!"})
    })
    
}
