import React from 'react';
import TodoForm from './components/TodoForm';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
