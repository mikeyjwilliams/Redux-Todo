import React from 'react';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Add to list</h2>
     <TodoForm />
     <h3>To do list:</h3>
    </div>
  );
}

export default App;
