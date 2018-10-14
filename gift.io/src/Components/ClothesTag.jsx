import React from 'react';

export default class ClothesTag extends React.Component {
    constructor(props){
        super(props);
    
    this.state = {
        ClothesTag: ""
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event){
        this.setState({ClothesTag : event.target.value});
    }
    handleSubmit(event){
        alert("You searched for: " + this.state.value);
        console.log("CONGRATULATIONS!");
        event.preventDefault();
        }

    render(){
        return(
        <clothes onSubmit={this.handleSubmit}>
           <label>
              Search:
           <input
               type="text"
               name="clothesTag"
               value={this.state.value}
               placeholder="What would you like to buy for your friend?"
               onChange={this.updateInput}
               />
           
           </label>
           <input type="submit" value="Submit" />
        </clothes>
              );
    }

}
