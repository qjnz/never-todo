import React, { useState } from 'react'
import { TodoList } from './components/TodoList'
import { AddTodo } from './components/AddTodo'
import './App.css'

const initialTodos: Todo[] = [
  { text: 'Go space travel 🚀', completed: false },
  { text: 'Go shopping 🛍️', completed: false },
  { text: 'Read Eloquent JavaScript 📚', completed: false },
  { text: 'Go to gym 🏃‍♀️', completed: true },
]

const App = () => {
  const [todos, setTodos] = useState(initialTodos)
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === selectedTodo.text) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const addTodo: AddTodo = (text) => {
    const isExisting = todos.some((todo) => todo.text === text)
    if (isExisting) {
      alert(`${text} is already in the list 😆`)
      return false
    }

    const newTodos = [...todos, { text, completed: false }]
    setTodos(newTodos)
  }

  return (
    <div className="container">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App
