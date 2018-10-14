import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './Components/facebook';
//import UpperLimit from './Components/UpperLimit'
//import LowerLimit from './Components/LowerLimit'
import Price from './Components/Price'
class App extends Component {
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
        <Price onChange={fields => this.onChange(fields)}/>
           <p>
             {JSON.stringify(this.state.fields, null,2)}
           </p>
    </div>

    );
  }
}

export default App;
