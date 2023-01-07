import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className='container'>
      <h4 className='text-center my-3'>Todos List!</h4>
      {
        props.todos.length === 0 ? "No Todos To Display" :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} onDelete={props.onDelete} />
          })
      }
    </div>
  )
}
