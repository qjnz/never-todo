import React, { FC, useState } from 'react'

interface Props {
  addTodo: AddTodo
}

export const AddTodo: FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('')

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />

      <button
        type="submit"
        disabled={text ? false : true}
        onClick={(e) => {
          e.preventDefault()
          addTodo(text)
          setText('')
        }}
      >
        Add Todo
      </button>
    </form>
  )
}
