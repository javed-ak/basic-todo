import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/todos')
    .then((res) => {
      res.json()
      .then((todos) => {
        setTodos(todos.todos)
      })
    })
  },[])

  return (
    <>
      <CreateTodo />
      <Todos todos = {todos}/>
    </>
  )
}

export default App
