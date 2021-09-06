import React from 'react'

export default function TodoItem({todo ,Delete}) {
    return (
        <div>
            <h3>
                {todo.title } 
            </h3>
            <p >{todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={()=>Delete(todo)}>Delete</button>
        </div>
    )
}
