import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './Components/facebook';
import Title from './Components/title';
import Image from './Components/image';
import Button from './Components/button';
import Profile from './Components/profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Facebook/>
		  <Profile title =<Title/> Image=<Image/> Button=<Button/> / >
      </div>
    );
  }
}

export default App;
