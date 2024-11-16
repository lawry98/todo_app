const express = require("express");
const {createType, updateType} = require("./types");
const { todos } = require("./dbconn");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

// Create a new todo item
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

// Get all todo items
app.get('/todos', async(req,res)=>{
    const todosDb = await todos.find({});
    res.status(200).json(todosDb);
})

// Mark a todo item as complete
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

// Delete a todo item
app.delete('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const parsed_id = updateType.safeParse(id);
        if (!parsed_id.success) {
            res.status(400).json({ message: "Incorrect input!" });
            return;
        }
        const todosDb = await todos.findOne({ _id: parsed_id.data });
        if (!todosDb) {
            res.sendStatus(404);
        } else {
            await todos.deleteOne({ _id: parsed_id.data });
            res.status(200).json({ message: "Delete done!" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Something went wrong!" });
    }
});



// Update a todo item
app.put('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const todoInput = req.body;
        const parsed_id = updateType.safeParse(id);
        const todoParsed = createType.safeParse(todoInput);
        if (!parsed_id.success || !todoParsed.success) {
            res.status(400).json({ message: "Incorrect input!" });
            return;
        }
        const todosDb = await todos.findOne({ _id: parsed_id.data });
        if (!todosDb) {
            res.sendStatus(404);
        } else {
            await todos.updateOne({ _id: parsed_id.data }, { title: todoParsed.data.title, description: todoParsed.data.description });
            res.status(200).json({ message: "Update done!" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Something went wrong!" });
    }
});

// Mark a todo item as undone
app.post('/notdone/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const parsed_id = updateType.safeParse(id);
        if (!parsed_id.success) {
            res.status(400).json({ message: "Incorrect input!" });
            return;
        }
        const todosDb = await todos.findOne({ _id: parsed_id.data });
        if (!todosDb) {
            res.sendStatus(404);
        } else {
            await todos.updateOne({ _id: parsed_id.data }, { isDone: false });
            res.status(200).json({ message: "Update done!" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Something went wrong!" });
    }
});

app.listen(3000);