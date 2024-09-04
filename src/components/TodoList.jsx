import React, { useContext, useState } from 'react'
import AddTodo from './AddTodo'
import FilteredTodo from './TodoFilter'
import List from './List'
import { TodoContext } from '../context'
import TodoItem from './TodoItem'

export default function TodoList() {

  const [todos, setTodos] = useState([])
  const [id, setId] = useState(1)
  const [currentFilter, setCurrentFilter] = useState("all")

  const handleAdd = text => {
    setId(id + 1)
    setTodos([...todos, { todo: text, id: id, completed: false }])
  }

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id != id))
  }


  const handleUpdate = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ))
  }

  return <>
    <TodoContext.Provider value={{ todos, currentFilter, onAdd: handleAdd, onDelete: handleDelete, onUpdate: handleUpdate, changeCurrent: setCurrentFilter }}>
      <AddTodo />
      <FilteredTodo />
      <p>showing: <strong>{currentFilter}</strong></p>
      <TodoItem />
    </TodoContext.Provider>
  </>

}
