import React from "react";

function StudentList({ students }) {
  // Calculate average marks
  const average =
    students.length > 0
      ? (
          students.reduce((sum, student) => sum + student.marks, 0) /
          students.length
        ).toFixed(2)
      : 0;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Student Marks</h2>
      <ul className="space-y-2 mb-4">
        {students.map((student, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 rounded ${
              student.marks > 50
                ? "bg-green-100 text-green-800 font-semibold"
                : "bg-red-100 text-red-700"
            }`}
          >
            <span>{student.name}</span>
            <div className="flex gap-4 items-center">
              <span>{student.marks}</span>
              <span>{student.marks > 50 ? "✅ Pass" : "❌ Fail"}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Class Average */}
      <div className="p-3 rounded bg-blue-100 text-blue-800 font-semibold text-center">
        📊 Class Average: {average}
      </div>
    </div>
  );
}

// Default props
StudentList.defaultProps = {
  students: [{ name: "No students available", marks: 0 }],
};

export default StudentList;
