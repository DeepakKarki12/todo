import React from 'react'
import Header from './Mycomponent/Header'
import Todos from './Mycomponent/Todos'
import { useState, useEffect } from 'react'
import Addtodos from './Mycomponent/Addtodo'



export default function App() {
  let inittodo;
  if(localStorage.getItem("todos")===null){
    inittodo=[];
  }
 else{
   inittodo=JSON.parse(localStorage.getItem("todos"))
   console.log(inittodo)
  }
  
  
  const addTodo = (title, desc) => {
    let mytodos = {
      title: title,
      desc: desc,
    }
    settodos([...todos, mytodos])
     
  }
  const [todos, settodos] = useState(inittodo);
 
  
  
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])
  
  




  let Delete = (todo) => {
    settodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos",JSON.stringify(todos))
  }




  return (
    <div >
      <Header title={'Todo'} />
      <Addtodos addTodo={addTodo} />
      <Todos todos={todos} delete={Delete} />

    </div>
  )


}
