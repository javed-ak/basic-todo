const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Javed:wq0QppRnBMV3dI1E@cluster0.iobmisv.mongodb.net/basicTodo-app")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    isDone: Boolean
})

const Todo = mongoose.model('todos', todoSchema);

module.exports = {
    Todo
}