import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // increment method
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // reset method
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const style = {
      textAlign: "center",
      marginTop: "50px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f4f4f4",
      width: "250px",
      margin: "auto",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    };

    const buttonStyle = {
      padding: "10px 20px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "teal",
      color: "white",
      cursor: "pointer",
      margin: "5px",
    };

    const resetStyle = {
      ...buttonStyle,
      backgroundColor: "crimson",
    };

    return (
      <div style={style}>
        <h2>Click Counter</h2>
        <p>Count: {this.state.count}</p>
        <button style={buttonStyle} onClick={this.increment}>
          Click Me
        </button>
        <button style={resetStyle} onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default ClickCounter;
