import React, { useState } from "react";

function TaskManager({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  // Toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskList(updatedTasks);
  };

  // Clear completed tasks
  const clearCompleted = () => {
    const activeTasks = taskList.filter((task) => !task.completed);
    setTaskList(activeTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold text-gray-800 mb-4">📝 Task Manager</h2>

      <ul className="space-y-2 mb-4">
        {taskList.map((task, index) => (
          <li key={index} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              className="w-4 h-4"
            />
            <span
              className={`${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {task.name}
            </span>
          </li>
        ))}
      </ul>

      {/* Clear Completed Button */}
      <button
        onClick={clearCompleted}
        className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        🗑️ Clear Completed
      </button>
    </div>
  );
}

// Default props
TaskManager.defaultProps = {
  tasks: [{ name: "No tasks available", completed: false }],
};

export default TaskManager;
