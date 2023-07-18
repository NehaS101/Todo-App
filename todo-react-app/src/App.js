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
    setTodos([...todos,todo]);
  }
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
      </div>
     </Router>
    </div>
  );
}

export default App;
