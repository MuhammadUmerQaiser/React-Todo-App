import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description is required");
        }
        else {
            props.addNewTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className='container my-3'>
            <h3 className='text-center'>Add Todo</h3>
            <div className='card p-3'>
                <form onSubmit={submitForm}>
                    <div class="form-group mb-3">
                        <label>Todo Title</label>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} class="form-control" id="title" name="title" placeholder="Enter Todo Title" />
                    </div>
                    <div class="form-group mb-3">
                        <label>Todo Description</label>
                        <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} class="form-control" id="desc" name="desc" placeholder="Enter Todo Description" />
                    </div>
                    <button type="submit" class="btn btn-sm btn-success mt-3">Add Todo</button>
                </form>
            </div>
        </div>
    )
}
