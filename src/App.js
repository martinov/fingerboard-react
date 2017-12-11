import React, { Component } from "react";
import logo from "./logo.svg";
import img1 from "./img/P5309524.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fingerboard Trainer</h1>
        </header>
        <p className="App-intro">Here we go..</p>
        <img src={img1} alt="img1" />
      </div>
    );
  }
}

export default App;
