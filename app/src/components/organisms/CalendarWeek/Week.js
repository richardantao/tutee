import React, { Component, Fragment } from "react";
import "./Week.scss";

export default class Week extends Component{
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
