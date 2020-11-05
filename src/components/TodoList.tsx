import React, { FC } from 'react'
import { TodoListItem } from './TodoListItem'

interface Props {
  todos: Todo[]
  toggleTodo: ToggleTodo
}

export const TodoList: FC<Props> = ({ todos, toggleTodo }) => {
  const completedTodos = todos.filter((todo) => todo.completed)
  const pendingTodos = todos.filter((todo) => !todo.completed)

  return (
    <div className="todo-list">
      <ul className="no-bullets">
        {pendingTodos.map((todo) => (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
      <div className="todo-completed">
        <span>Completed: ({completedTodos.length})</span>
        <ul className="no-bullets">
          {completedTodos.map((todo) => (
            <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </div>
    </div>
  )
}
