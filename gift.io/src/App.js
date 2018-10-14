import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './Components/facebook';
import Title from './Components/title';
import Image from './Components/image';
import Button from './Components/button';
import Profile from './Components/profile';
import Price from './Components/Price'
class App extends Component {
	constructor() {
		super();
		this.state = {
			title: ["someone", "some day"],
			image: null,
			button: "red"
		}
	}
    state = {
        fields: {}
    };

    onChange = updatedValue =>{
        this.setState({
            fields:{
            ...this.state.fields,
            ...updatedValue
            }
        });
    };

  render() {
    return (
      <div className="App">
        <Facebook/>
		  <Profile  title={this.state.title} image={this.state.image} button={this.state.button}/>
        <Price onChange={fields => this.onChange(fields)}/>
           <p>
             {JSON.stringify(this.state.fields, null,2)}
           </p>
    </div>
		  );
  }
}

export default App;
