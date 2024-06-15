// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const handleUpdate = (task, updatedText) => {
    updateTask(task, { ...task, description: updatedText });
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <div className="task-details">
            <div>
              <strong>Task:</strong> {task.title}
            </div>
            <div>
              <strong>Description:</strong> {task.description}
            </div>
            <div>
              <strong>Date:</strong> {task.date}
            </div>
          </div>
          <div className="task-actions">
            <button onClick={() => handleUpdate(task, prompt('Update task description:', task.description))}>Update</button>
            <button onClick={() => deleteTask(task)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
