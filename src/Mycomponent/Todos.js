import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    return (
        <div className="container ">
            <h2 className="text-center my-3">My Todos</h2>
             

        {props.todos.length===0?"no todo to display":props.todos.map((todo)=>{

           return <TodoItem todo={todo} key={todo.sno} Delete={props.delete}/>
            
        })
    }
           
        </div>
    )
}
