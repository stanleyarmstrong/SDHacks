import React from 'react';

export default class LowerLimit extends React.Component {
    state = {
        number: parseInt('10',10)
    }
    render() {
        return (
        <upper>
          <input
          placeholder='Lower Limit?'
          value={this.state.number}
          onChange={e => this.setState({number: parseInt(e.target.value,10)})}
          />
        </upper>
               ); 
    }

}
