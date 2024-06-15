// src/components/TaskInput.js
import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() && taskDescription.trim() && taskDate && new Date(taskDate) >= new Date()) {
      addTask({ title: taskTitle, description: taskDescription, date: taskDate });
      setTaskTitle('');
      setTaskDescription('');
      setTaskDate('');
    } else {
      if (!taskTitle.trim() || !taskDescription.trim()) {
        alert('Both task title and description are required');
      } else if (!taskDate) {
        alert('Task date is required');
      } else {
        alert('Task date cannot be before the current date');
      }
    }
  };

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
        min={new Date().toISOString().split('T')[0]} // Set minimum date to current date
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
