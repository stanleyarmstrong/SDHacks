import React from 'react';

export default class UpperLimit extends React.Component {
    state = {
        number: ''
    }

    render() {
        return (
        <upper>
          <input placeholder='Upper limit?' value={this.state.number}/>
        </upper>
               );
    }

}
