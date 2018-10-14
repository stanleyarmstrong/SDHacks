import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {phrase: props.phrase, color: props.color};
	}
	render()
	{
		return(
				<div>
					<h3>{this.state.phrase}</h3>
				</div>
				);
	}
}
export default Button
