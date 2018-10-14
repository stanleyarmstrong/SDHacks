import React from "react"
import ReactDOM from "react-dom"
import Title from "./title"
import Image from "./image"
import Button from "./button"

class Profile extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {title: props.title, image:props.image, button:props.button};
	}

	render()
	{
		return( <div>{this.state.title} {this.state.image} {this.state.button} </div>);
	}
}

export default Profile

