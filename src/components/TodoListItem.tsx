import React, { FC } from 'react'

interface Props {
  todo: Todo
  toggleTodo: ToggleTodo
}

export const TodoListItem: FC<Props> = ({ todo, toggleTodo }) => {
  const onClick = () => {
    toggleTodo(todo)
  }

  return (
    <li>
      <label
        htmlFor={todo.text}
        style={{ textDecoration: todo.completed ? 'line-through' : undefined }}
      >
        <input
          id={todo.text}
          type="checkbox"
          defaultChecked={false}
          checked={todo.completed}
          onClick={onClick}
        />
        {todo.text}
      </label>
    </li>
  )
}
