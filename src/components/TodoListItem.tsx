import React, { FC } from 'react'

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: FC<Props> = ({ todo, toggleTodo }) => {
    return <li>
        <label htmlFor={todo.text} style={{ textDecoration: todo.completed ? 'line-through' : undefined }}>
            <input 
                name={todo.text} 
                type="checkbox" 
                checked={todo.completed} 
                onClick={() => {
                    toggleTodo(todo)
                }}
            /> 
            {todo.text}
        </label>
    </li>
}
