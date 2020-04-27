import React from 'react'
import '../assets/css/TodoItem.css'

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p className={props.item.completed ? "strike" : ""}> {props.item.text}</p>
            
        </div>
    )
}

export default TodoItem