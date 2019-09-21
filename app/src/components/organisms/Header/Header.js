import React, { Component } from "react";
import "./Header.scss";

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: false
		});
	}

	render() {
		return <h1>{this.props.header}</h1>		
	}	
}

