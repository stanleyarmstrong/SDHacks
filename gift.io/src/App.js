import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './Components/facebook';
import UpperLimit from './Components/UpperLimit'
import LowerLimit from './Components/LowerLimit'
import Title from './Components/title';
import Image from './Components/image';
import Button from './Components/button';
import Profile from './Components/profile';

class App extends Component {
	constructor() {
		super();
		this.state = {
			title: ["someone", "some day"],
			image: null,
			button: "red"
		}
	}
  render() {
    return (
      <div className="App">
        <Facebook/>
        <LowerLimit/>
        <UpperLimit/>
		  
		  <Profile  title={this.state.title} image={this.state.image} button={this.state.button}/>
</div>


		  );
  }
}

export default App;
