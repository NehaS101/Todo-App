import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

function App() {
  const [todo,setTodos] = useState([]);

  const addTodo = (todo)=>{
    setTodos([...todo,todo]);
  }

  const deleteTodo = (id) => {
    const updatedTodos = todo.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const markTodoCompleted = (id) => {
    const updatedTodos = todo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/todos">Todo List</Link>
            </li>
            <li>
              <Link to="/create">Create Todo</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/todos">
          <TodoList
          todos={todo}
          onDelete={deleteTodo}
          onmarkComplete={markTodoComplete}
          />
        </Route>
        <Route exact path="/create">
          <CreateTodo onCreate={addTodo}/>

        </Route>
      </div>
     </Router>
    </div>
  );
}

export default App;
