const express = require("express")
const bodyparser = require("body-parser")
const cors=require("cors")
const app = express();
const {createTodo,updateTodo}=require("./types")
const {todo}=require("./db")


app.use(express.json())
app.use(cors())





app.post("/todos", async(req, res) => {
   const payload=req.body

    const confirm = createTodo.safeParse(payload)
    if (!confirm.success) {
       

        return res.status(404).json({message:"You sent wrong inputs"})
    }

    await todo.create({title:payload.title,description:payload.description,completed:false})
    res.json({message:"To do created"})

})


app.get('/todos', (req, res) => {

    todo.find({}).then((item)=>{
        res.json(item)
    })

})

app.put("/completed", async(req, res) => {

    const updatepayload=req.body;
    const confirm=updateTodo.safeParse(updatepayload)
    if(!confirm.success)
    {
        return res.status(404).json({message:"You sent wrong inputs"})
    }

    await todo.updateOne({_id:req.body.id},{completed:true})


    res.json({message:"Updated  To do"})

})
// app.put("/completed", async (req, res) => {
//     const updatepayload = req.body;
//     const confirm = updateTodo.safeParse(updatepayload);
  
//     if (!confirm.success) {
//       return res.status(404).json({ message: "You sent wrong inputs" });
//     }
  
//     // Assuming you have a unique identifier like _id for the document you want to delete
//     const todoId = req.body.id;
  
//     // Use deleteOne to delete the document based on its unique identifier
//     await todo.deleteOne({ _id: todoId });
  
//     res.json({ message: "Deleted Todo" });
//   });
  

app.listen(process.env.PORT, (req, res) => {
    console.log("Server running in port 3000");
})