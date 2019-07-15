import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h2>The List</h2>
      <TodoList />
      <h3>Todo List:</h3>
    </div>
  );
}

export default App;
