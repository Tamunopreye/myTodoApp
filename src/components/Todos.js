import React from 'react'
import TodoItem from './TodoItem'
const Todos = ({ todos, handleChange, onDelete }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} handleChange={handleChange} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Todos