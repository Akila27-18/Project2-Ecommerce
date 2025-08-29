import React from "react";

function WelcomeMessage() {
  const style = {
    color: "white",
    backgroundColor: "teal",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  return <h1 style={style}>Welcome to React Learning!</h1>;
}

export default WelcomeMessage;
