import { useState } from 'react'
import './App.css'
import List from './components/List'
import { TodoContext } from './context'
import TodoList from './components/TodoList'

function App() {

  return <>
    <TodoList />
  </>
}

export default App
