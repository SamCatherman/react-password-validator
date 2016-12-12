import React, { Component } from 'react';
import './App.css';
import Pwords from './Pwords.js'
class App extends Component {
  render() {
    return (
      <div className="App">

        <p className="App-intro">
          Sam's Handy P@$$w0rd Validator
          <br></br>
          please login below
        </p>
        <Pwords />
      </div>
    );
  }
}

export default App;
