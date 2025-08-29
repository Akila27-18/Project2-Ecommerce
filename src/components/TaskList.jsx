import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold text-gray-800 mb-4">My Tasks</h2>
      <ul className="list-disc list-inside space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`${
              task.completed ? "line-through text-green-600" : "text-gray-700"
            }`}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Default props
TaskList.defaultProps = {
  tasks: [{ text: "No tasks available", completed: false }],
};

export default TaskList;
