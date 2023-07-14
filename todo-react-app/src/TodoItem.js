import React from 'react';

const TodoItem = ({todo,onDelete,onMarkComplete}) =>{
    const handleDelete =()=>{
        onDelete(todo.id);
    }
    const handleMarkComplete =()=>{
        onMarkComplete(todo.id);
    }
    return (
<div>
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
    <p>Status {todo.completed ? 'Completed' : 'Active'}</p>
    <button onClick={handleDelete}>Delete</button>
    <button onClick={handleMarkComplete}>
        {todo.completed ? 'Mark Active' : 'Mark Completed'}
        </button>
</div>
    );
}


export default TodoItem;