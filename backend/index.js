const express = require('express');
const app = express();
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Please put '/todos' in URL to see all Todos")
})

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)

    if(!parsePayload.success) {
        res.status(403).json({
            message: "Inputs are wrong"
        })
    }

    const addTodo = await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        isDone: false
    })
    res.json({
        message: "Todo has created"
    })
})

app.get('/todos', (req, res) => {
    Todo.find()
    .then((todos) => {
        res.json({
            todos
        })
    })
})

app.put('/completed', (req, res) => {
    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);

    if(!parsePayload.success) {
        res.status(403).json({
            message: 'Input are not correct!'
        })
    }
    Todo.findOneAndUpdate({
        _id: req.body.id
    }, {
        isDone: true
    })
    .then(() => {
        res.json({
            message: 'Todo marked as Done'
        })
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});