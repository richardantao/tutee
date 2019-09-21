import React, { Component, Fragment } from "react";
import "./Day.scss";

export default class Day extends Component{
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



