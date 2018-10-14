import React from 'react';

export default class UpperLimit extends React.Component {
    state = {
        number: parseInt('100',10) 
    }

    render() {
        return (
        <upper>
          <input
          placeholder='Upper limit?'
          value={this.state.number}
          onChange={e => this.setState({number:parseInt( e.target.value,10)})}
          />
        </upper>
               );
    }

}
