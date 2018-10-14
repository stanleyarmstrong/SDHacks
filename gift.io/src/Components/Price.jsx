import React from 'react';

export default class Price extends React.Component {
    state = {
        Lower: parseInt('10',10)
        Upper: parseInt('100',10)
    }
    change = e =>{
        this.setState({
            [e.target.name]: e.target.value

        });
    };
    render() {
        return (
        <lower>
          <input
          name="lowerLimit"
          placeholder='Lower Limit?'
          value={this.state.lower}
          onChange={e => this.change(e)}
          />
        </lower>
        <br />
        <upper>
          <input
          name="upperLimit"
          placeholder="Upper Limit?"
          value={this.state.upper}
          onChange={e => this.change(e)}
          />
        </upper>
        <button onClick={e =>this.onSubmit()}>Submit</button>
               ); 
    }

}
