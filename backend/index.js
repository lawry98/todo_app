const express = require("express");
const {createType, updateType} = require("./types");
const { todos } = require("./dbconn");
const app = express();


app.use(express.json());
app.post('/todos', (req,res)=>{
    const todoInput = req.body;
    const todoParsed = createType.safeParse(todoInput);
    if(!todoParsed.success){
        res.status(404).json({message: 'incorrect input'});
    }else{
        todos.create({title:todoParsed.data.title, description:todoParsed.data.description, isDone: false});
        res.sendStatus(200);
    }
})

app.get('/todos', async(req,res)=>{
    const todosDb = await todos.find({});
    res.status(200).json(todosDb);
})

app.post('/complete/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const parsed_id = updateType.safeParse(id);
        if(!parsed_id.success){
            res.status(400).json({message:"Incorrect input!"});
            return;
        }
        const todosDb = await todos.findOne({_id: parsed_id.data});
        if(!todosDb){
            res.sendStatus(404);
        }else{
            await todos.updateOne({_id: parsed_id.data},{isDone:true})
            res.status(200).json({message: "Update done!"});
        }
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Something went wrong!"});
    }
})

app.listen(3000);