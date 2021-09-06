import React from 'react'
import {useState} from 'react'
export default function Addtodo({addTodo}) {
    const [Title, settitle] = useState("");
    const [Desc, setDesc] = useState("");
    let Submit = (e) => {
        e.preventDefault();
        if(!Title||!Desc){
            alert("Title or Description cannot be empty")
        }
        else{
        addTodo(Title,Desc);
        settitle("");
        setDesc("");
        }
        
        
    }

    return (
        <div className="container">
            <h3 className="text-center">Add-Todo</h3>
            <form onSubmit={Submit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label   w-71" >Title</label>
                    <input type="text" className="form-control" value={Title} onChange={(e)=>{settitle(e.target.value)}} placeholder="Enter your title here" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control"  rows="3" value={Desc}  onChange={(q)=>{setDesc(q.target.value)}} placeholder="Add description here" ></textarea>
                    <button className="btn btn-primary my-3 text-center" >Add Todo</button>
                </div>
            </form>
        </div>
    )
}
