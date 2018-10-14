import React from 'react';
import {Component} from 'react';

class Image extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {imgUrl: props.imgUrl};
	}

	render()
	{
		return ( <img src={this.props.imgUrl} alt ="img text to display: from Image in component"/>);
	}
}

export default Image

