const express = require('express');
const app = express();
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');

app.use(express.json());
app.use(cors());

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)

    if(!parsePayload.success) {
        res.status(403).json({
            message: "Inputs are wrong"
        })
    }
})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {
    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);

    if(!parsePayload.success) {
        res.status(403).json({
            message: 'Input are not correct!'
        })
    }
})

app.listen(3000);