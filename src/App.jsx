import React from "react";
import StudentList from "./components/StudentList";

function App() {
  const students = [
    { name: "Akila", marks: 75 },
    { name: "Ravi", marks: 40 },
    { name: "Nimali", marks: 55 },
    { name: "Saman", marks: 30 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <StudentList students={students} />
    </div>
  );
}

export default App;
