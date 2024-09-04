import React, { useContext, useState } from 'react'
import { TodoContext } from '../context'

export default function FilteredTodo({ currentFilter }) {

    const List = ["all", "completed", "active"]
    const { changeCurrent } = useContext(TodoContext)
    return <>
        {
            List.map((creteria, i) => <button
                key={i}
                className={currentFilter == creteria ? "button-active" : null}
                onClick={() => changeCurrent(creteria)}
            >
                {creteria}
            </button>)
        }
    </>
}
