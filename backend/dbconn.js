const mongoose = require("mongoose");
require('dotenv').config();

const mongoURI = process.env.MONGODB_URL;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


const schema = mongoose.Schema({
    title: String,
    description: String,
    isDone: Boolean,
});

const todos = mongoose.model("todos", schema);

module.exports={todos:todos};