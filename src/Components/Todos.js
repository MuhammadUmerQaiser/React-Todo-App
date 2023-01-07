import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  const todoStyle = {
    minHeight: "70vh"
  }
  return (
    <div className='container my-4' style={todoStyle}>
      <h4 className='text-center my-3'>Todos List!</h4>
      {
        props.todos.length === 0 ? "No Todos To Display" :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
      }
    </div>
  )
}
