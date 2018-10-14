import React from 'react';

export default class Price extends React.Component {
    state = {
        Lower: "",
        Upper: ""
    };
    change = e =>{
        this.props.onChange({[e.target.value]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value

        });
    };
    onSubmit = e => {
        e.preventDefault();
        //this.props.onSubmit(this.state);
        console.log(this.state);
        this.setState({
            Lower: "",
            Upper: ""
        });
        this.props.onChange({
            Lower: "",
            Upper: ""
        });
    };
    render() {
        return (
    <price>
          <input
          name="lowerLimit"
          placeholder='Lower Limit?'
          value={this.state.lower}
          onChange={e => this.change(e)}
          />
          <input
          name="upperLimit"
          placeholder="Upper Limit?"
          value={this.state.upper}
          onChange={e => this.change(e)}
          />
    
        <button onClick={e =>this.onSubmit(e)}>Submit</button>
    </price>
               ); 
    }

}
