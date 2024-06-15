// src/App.js
import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList'; // Import Pagination component
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [viewAllTasks, setViewAllTasks] = useState(false); // Define viewAllTasks state

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (oldTask, newTask) => {
    setTasks(tasks.map((task) => (task === oldTask ? newTask : task)));
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const handleViewAllTasks = () => {
    setViewAllTasks(true);
  };

  const handleHideAllTasks = () => {
    setViewAllTasks(false);
  };

  return (
    <div className="App">
      <h1>Itinerary Planner</h1>
      <TaskInput addTask={addTask} />
      {tasks.length === 0 && !viewAllTasks && (
        <p>No tasks added yet.</p>
      )}
      {viewAllTasks && tasks.length > 0 && (
        <>
          <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
          <div className="button-group">
            <button onClick={handleHideAllTasks}>Hide All Tasks</button>
          </div>
        </>
      )}
      {!viewAllTasks && tasks.length > 0 && (
        <div className="button-group">
          <button onClick={handleViewAllTasks}>View All Tasks</button>
        </div>
      )}
    </div>
  );
};

export default App;
