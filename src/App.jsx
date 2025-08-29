import React from "react";
import TaskList from "./components/TaskList";

function App() {
  const myTasks = [
    { text: "Complete React project", completed: true },
    { text: "Study for exams", completed: false },
    { text: "Buy groceries", completed: true },
    { text: "Go for a walk", completed: false },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <TaskList tasks={myTasks} />
    </div>
  );
}

export default App;

