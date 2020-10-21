import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  handleClick = () => {
    let element = document.getElementById("para");
    element.innerText =
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  };

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}></button>
        <p id="para"></p>
      </div>
    );
  }
}

export default App;
