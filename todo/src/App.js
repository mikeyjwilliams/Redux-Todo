import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <h2>The List</h2>
      <TodoForm />
      <h3>Todo List:</h3>
      <TodoList />
    </div>
  );
}

export default App;
