import React from "react";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-6">
      {/* With custom props */}
      <Profile name="Akila" age={32} city="Chennai" />

      {/* Without props → uses defaultProps */}
      <Profile />
    </div>
  );
}

export default App;
