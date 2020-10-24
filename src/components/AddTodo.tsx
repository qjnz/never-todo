import React, { ChangeEvent, FC, useState } from 'react'

interface Props {
  addTodo: AddTodo
}

export const AddTodo: FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form>
      <input type="text" value={text} onChange={onChange} />

      <button type="submit" disabled={text ? false : true} onClick={onSubmit}>
        Add Todo
      </button>
    </form>
  )
}
