import React, { useContext, useState } from 'react'
import { TodoContext } from '../context'


export default function TodoItem() {

  const { onDelete, todos, onUpdate, currentFilter } = useContext(TodoContext)

  let filtered = todos

  if (currentFilter == "active") {
    filtered = todos.filter(a => !a.completed)
  } else if (currentFilter == "completed") {
    filtered = todos.filter(a => a.completed)
  }

  return <div>
    {
      filtered.map(todo => <div key={todo.id} className={"todo" + (todo.completed ? "done" : "")}>
        <p>{todo.todo}</p>
        <button onClick={() => onDelete(todo.id)}>delete</button>
        <button onClick={() => onUpdate(todo.id)}>{todo.completed ? "CANCEL" : "COMPLETE"}</button>
      </div>)

    }
  </div>

}
