import React, { Component, Fragment } from "react";
import "./Month.scss";

export default class Month extends Component{
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
		return(
			<Fragment>

			</Fragment>
		)
	}
}
