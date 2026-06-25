import React, { useState } from 'react';

export default function TodoContainer() {
  // State 1: The list of tasks. Each task is an object with id, text, and completed flag.
  const [tasks, setTasks] = useState([]);

  // State 2: What the user is currently typing in the input box.
  const [inputValue, setInputValue] = useState('');

  // State 3: Which filter is active right now — 'all', 'todo', or 'completed'.
  const [filter, setFilter] = useState('all');

  // This runs when the user presses the "create" button or hits Enter.
  const handleAddTask = (event) => {
    event.preventDefault(); // Stop the page from reloading.

    const trimmed = inputValue.trim(); // Remove extra spaces from start and end.

    if (trimmed) {
      // Create a brand-new task object.
      const newTask = {
        id: Date.now(),          // A simple unique number based on the current time.
        text: trimmed,           // The actual task text the user wrote.
        completed: false         // Brand new tasks start as NOT done.
      };

      // Add the new task to the beginning of the list (so newest appears first).
      setTasks([newTask, ...tasks]);

      // Clear the input box so the user can type something new.
      setInputValue('');
    }
  };

  // This flips a single task between "done" and "not done".
  const handleToggleComplete = (id) => {
    // We loop through every task and flip the one that matches the clicked id.
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // This changes which filter tab is active.
  const handleFilterChange = (type) => {
    setFilter(type);
  };

  // Decide which tasks to show based on the active filter.
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;           // Show everything.
    if (filter === 'todo') return !task.completed; // Show only NOT done.
    if (filter === 'completed') return task.completed; // Show only done.
    return true;
  });

  return (
    <div className="container">
      <div className="coloum">
        {/* The form for adding a new task */}
        <form onSubmit={handleAddTask}>
          <input
            className="text"
            type="text"
            placeholder="Enter new task here"
            value={inputValue}                          /* React controls what is inside */
            onChange={(e) => setInputValue(e.target.value)} /* Update state on every keystroke */
          />
          <button className="submit" type="submit">creatre</button>
        </form>

        {/* The three filter tabs */}
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

      {/* The list of tasks */}
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

