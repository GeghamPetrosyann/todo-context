import React, { useContext, useState } from 'react'
import { TodoContext } from '../context'

export default function AddTodo() {

  const { onAdd } = useContext(TodoContext)
  const [text, setText] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    if (text.trim()) {
      onAdd(text)
      setText("")
    }
  }

  return <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <button>Save</button>
    </form>
  </>
}
