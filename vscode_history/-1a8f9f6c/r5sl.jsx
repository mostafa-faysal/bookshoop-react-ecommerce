import React, { useState } from 'react';

export default function TodoContainer() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (event) => {
    event.preventDefault();

    const trimmed = inputValue.trim();

    if (trimmed) {
      const newTask = {
        id: Date.now(),
        text: trimmed,
        completed: false
      };

      setTasks([newTask, ...tasks]);
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <div>
        <form onSubmit={handleAddTask}>
          <input
            className="text"
            type="text"
            placeholder="Enter new task here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="submit" type="submit">create</button>
        </form>

        <div className="list">
          <span
            className={filter === 'all' ? 'active' : ''}
            onClick={() => handleFilterChange('all')}
          >
            all
          </span>
          <span
            className={filter === 'todo' ? 'active' : ''}
            onClick={() => handleFilterChange('todo')}
          >
            todo
          </span>
          <span
            className={filter === 'completed' ? 'active' : ''}
            onClick={() => handleFilterChange('completed')}
          >
            completed
          </span>
        </div>
      </div>

      <div className="todo-list justify-content-space-between align-items-center d-flex">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`todo ${task.completed ? 'opacity completed-text' : ''}`}
          >
            <span>{task.text}</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

