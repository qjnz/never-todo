import React, { FC } from 'react'

interface Props {
  todo: Todo
  toggleTodo: ToggleTodo
}

export const TodoListItem: FC<Props> = ({ todo, toggleTodo }) => {
  const onClick = () => {
    toggleTodo(todo)
  }

  // const onDragStart = () => {}

  // const onDragOver = () => {}

  // const onDrop = () => {}

  return (
    // <li draggable="true" onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop}>
    <li draggable="true">
      <label
        htmlFor={todo.text}
        style={{ textDecoration: todo.completed ? 'line-through' : undefined }}
      >
        <input id={todo.text} type="checkbox" checked={todo.completed} onChange={onClick} />
        {todo.text}

        <i className="fas fa-arrows-alt-v" />
      </label>
    </li>
  )
}
