import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  handleClick = () => {};

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
