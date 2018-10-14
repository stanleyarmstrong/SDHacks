import React from 'react';
import {Component} from 'react';

class Title extends React.Component
{
	constructor(props)
	{	
		super(props);
		this.state = {firstName: props.firstName, days: props};
	}

	render()
	{
		return (<h1>{this.props.firstName}'s birthday is in {this.props.days} days</h1>);
	}
	
}	
export default Title;
