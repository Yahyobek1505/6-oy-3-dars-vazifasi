import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputText, completed: false }]);
      setInputText('');
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="MainPage">
      <h1>Todo App</h1>
      <div className="todoForm">
        <input className='Todo-input'
          type="text"
          placeholder="Enter a todo..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
     <div className='result'>
     <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleComplete(todo.id)}>{todo.text}</span>
          </li>
        ))}
      </ul>
     </div>
    </div>
  );
}

export default App;
