import React, { useState } from 'react';

export default function TodoContainer() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (event) => {
    event.preventDefault();
    const task = event.target.elements.task.value.trim();
    console.log( event.target.reset())
    
    if (task) {
      setTasks([...tasks, task]);
      event.target.reset();
    }
  };

  return (
    <div className="container">
      <div className="coloum">
        <form onSubmit={handleAddTask}>
          <input
            className="text"
            type="text"
            placeholder="Enter new task here"
            name="task"
          />
          <button className="submit">create</button>
        </form>
        <div className="list">
          <span className="all active">all</span>
          <span className="tod">todo</span>
          <span className="completed-list">completed</span>
        </div>
      </div>
      <div className="todo-list justify-content-space-between align-items-center d-flex">
        {tasks.map((task, index) => (
          <div key={index} className="todo"> {task}
            <input type="checkbox" onClick={
              () =>{
                const AddClass = document.querySelector('.opacity');
                AddClass.classList.add('opacity');
                const updatedTasks = [...tasks];
              }
               }></input>
          </div>
   
        ))}
      </div>
    </div>
  );
}