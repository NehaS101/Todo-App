import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

function App() {
  const [todo,setTodos] = useState([]);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
