import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className='container mt-3'>
      <div className='card p-2'>
        <h4>Title</h4>
        <p>{todo.title}</p>

        <h4>Description</h4>
        <p>{todo.desc}</p>

        <button className='btn btn-danger btn-sm' onClick={() => onDelete(todo)}>Delete</button>
      </div>
    </div>
  )
}
