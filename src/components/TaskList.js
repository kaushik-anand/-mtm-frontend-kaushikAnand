import React from 'react';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const handleUpdateDescription = (task, updatedText) => {
    updateTask(task, { ...task, description: updatedText });
  };

  // Function to compare dates
  const compareDates = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  };

  // Sort tasks by date
  tasks.sort(compareDates);

  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-item-content">
              <div className="task-details">
                <div className="task-title">
                  <strong>Task:</strong> {task.title}
                </div>
                <div className="task-description">
                  <strong>Description:</strong> {task.description}
                </div>
              </div>
              <div className="task-actions">
                <button onClick={() => handleUpdateDescription(task, prompt('Update task description:', task.description))}>Update Description</button>
                <button className="delete-button" onClick={() => deleteTask(task)}>Delete</button>
              </div>
            </div>
            <span className="task-date">{task.date}</span>
          </li>
        ))
      ) : (
        <li className="no-task">No tasks added yet</li>
      )}
    </ul>
  );
};

export default TaskList;
