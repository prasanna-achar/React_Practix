import React,{ useState} from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../features/todo/todoSlice'
function AddTodo(){
    const [input, setInput] = useState()
    const dispatch = useDispatch()
    

    const addTodoHandler =(e) =>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
    return(
        <>
        <form onSubmit={addTodoHandler} 
        className="w-full ">
           <input 
           className ='max-w-full w-4/5 m-2 h-8 text-black'
           type="text" 
           
           placeholder="Enter A todo"
           value={input}
           onChange = {e => setInput(e.target.value)}/> 
           <button
           className ="w-fit bg-red-500 p-2"
           type ="submit"
           >Add Todo</button>
        </form></>
    )
}

export default AddTodo;