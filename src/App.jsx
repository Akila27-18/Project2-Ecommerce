import React, { useState } from "react";
import TemperatureDisplay from "./components/Temperaturedisplay";

function App() {
  const [temperature, setTemperature] = useState(20); // default

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🌡️ Temperature Checker</h2>

      {/* Input box */}
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(Number(e.target.value))}
        style={{
          padding: "10px",
          fontSize: "1rem",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />

      {/* Slider */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="range"
          min="-10"
          max="50"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
        />
      </div>

      {/* Display Card */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TemperatureDisplay temperature={temperature} />
      </div>
    </div>
  );
}

export default App;
