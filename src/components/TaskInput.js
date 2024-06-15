// src/components/TaskInput.js
import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() && taskDescription.trim() && taskDate.trim()) {
      addTask({ title: taskTitle, description: taskDescription, date: taskDate });
      setTaskTitle('');
      setTaskDescription('');
      setTaskDate('');
    } else {
      alert('All fields are required');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter task description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <input
        type="date"
        value={taskDate}
        min={today}
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
