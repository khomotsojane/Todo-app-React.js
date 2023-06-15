import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: Date.now(),
        title: newTodo,
        completed: false,
        priority: 'high' // Default priority is set to 'high'
      };

      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handlePriorityChange = (todoId, priority) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, priority };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      
      <form onSubmit={handleAddTodo}>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} placeholder="New Todo" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={todo.completed ? 'todo-item completed' : 'todo-item'}
              
            >
              {todo.title}
            </span>
            <div className="priority-buttons">
              <select className={todo.priority === 'high' ? 'priority-button high' : todo.priority === 'low' ? 'priority-button low': 'priority-button medium'} onClick={(e) => handlePriorityChange(todo.id, e.target.value)} name="priority" id="priiority">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              
            </div>
            <button onClick={() => handleUpdateTodo(todo.id)}>Update</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
