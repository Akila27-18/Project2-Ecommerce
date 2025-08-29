import React from "react";
import TaskManager from "./components/TaskManager";

function App() {
  const tasks = [
    { name: "Finish React project", completed: false },
    { name: "Study for exam", completed: true },
    { name: "Go grocery shopping", completed: false },
    { name: "Workout for 30 mins", completed: false },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <TaskManager tasks={tasks} />
    </div>
  );
}

export default App;
