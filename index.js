const express = require("express");
const {createType} = require("./types");
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

app.get('/todos', (req,res)=>{
    
})

app.post('/complete', (req,res)=>{
    
})

app.listen(3000);