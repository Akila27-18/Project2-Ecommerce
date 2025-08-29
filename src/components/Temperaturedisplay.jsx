import React from "react";

const TemperatureDisplay = ({ temperature }) => {
  let status = "";

  if (temperature > 30) {
    status = "Hot";
  } else if (temperature < 15) {
    status = "Cold";
  } else {
    status = "Normal";
  }

  const style = {
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    backgroundColor:
      status === "Hot"
        ? "tomato"
        : status === "Cold"
        ? "skyblue"
        : "lightgreen",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    width: "200px",
  };

  return (
    <div style={style}>
      <p>Temperature: {temperature}°C</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default TemperatureDisplay;
