import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './Components/facebook';
import UpperLimit from './Components/UpperLimit'
import LowerLimit from './Components/LowerLimit'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Facebook/>
        <LowerLimit/>
        <UpperLimit/>
</div>

    );
  }
}

export default App;
