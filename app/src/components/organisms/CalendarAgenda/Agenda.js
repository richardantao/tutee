import React, { Component, Fragment } from "react";
import "./Agenda.scss";

export default class Agenda extends Component{
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
