import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos,onDelete,onMarkCompleted}) =>{
    return (
<div>
{todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onMarkCompleted={onMarkCompleted}
        />
      ))}
</div>
    );
}


export default TodoList;