const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://lawry1998:Tf9jeGN2TlANhjj2@cluster0.ckzd0bt.mongodb.net/todo_app');

const schema = mongoose.Schema({
    title: String,
    description: String,
    isDone: Boolean,
});

const todos = mongoose.model("todos", schema);

module.exports={todos:todos};