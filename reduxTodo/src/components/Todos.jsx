import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { removeTodo } from "../features/todo/todoSlice"

function Todos(){
    const todos = useSelector(state => (state.todos))
    const dispatch = useDispatch()


    return(
        <>
        <div>Todos</div>
        {todos.map((todo)=>(
            <li className="flex flex-wrap align-middle justify-between py-4"
            key={todo.id}>
                {todo.text}
                <div className="mx-2">
                   
                    <button className="w-fit h-fit bg-orange-500 p-2 text-center"
                    onClick={()=> dispatch(removeTodo(todo.id))}>
                        X
                    </button>
                </div>
            </li>
        ))}
        {console.log(todos)}
        </>
    )
}


export default Todos