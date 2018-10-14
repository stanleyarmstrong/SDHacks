import React from 'react';

export default class LowerLimit extends React.Component {
    state = {
        number: ''
    }

    render() {
        return (
        <upper>
          <input placeholder='Lower Limit?' value={this.state.number}/>
        </upper>
               );
    }

}
