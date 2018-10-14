import React from 'react';

class UpperLimit extends React.Component {
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
export{ UpperLimit }
