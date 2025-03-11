import { useState } from "react"
import { addTodo } from "../services/todoService"
import './Todo.css'
import { TodoList } from "./TodoList"

export const Todo = ({ todos }) => {
    const [value, setValue] = useState("")

    const handleAddTodo = () => {
        addTodo({ text: value, completed: false })
        setValue("")
    }
    return (

        <div style={{ maxWidth: 400, margin:"auto", padding:20}}>

            <div className="todo-container">
                <input className="input" type="text" value={value} onChange={(e) => setValue(e.target.value)}>
                </input>
                <button className="todo-button" onClick={() => handleAddTodo()}>ADD</button>
            </div>
            <TodoList todos={todos}></TodoList>
        </div>
    )
}