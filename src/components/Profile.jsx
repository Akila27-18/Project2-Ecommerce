import React from "react";

// Profile Component with destructuring
function Profile({ name, age, city }) {
  return (
    <div className="max-w-xs mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl text-center border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">City: {city}</p>
    </div>
  );
}

// Default props
Profile.defaultProps = {
  name: "Guest User",
  age: "Not specified",
  city: "Unknown",
};

export default Profile;
