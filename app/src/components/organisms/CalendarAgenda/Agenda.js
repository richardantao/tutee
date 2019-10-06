import React, { Component } from "react";
import axios from "axios";
import LoadingColumn from "../../molecules/LoadingColumn";
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
		axios.get("http:localhost:3000/calendar/agenda")
		.then(res => {
			this.setState({
				isLoading: false
			});
		})
		.catch(err => {
			this.setState({
				error: err,
				isLoading: false
			});
		});
	}

	render() {
		let { isLoading } = this.state;
		
		if(isLoading) {
			return <LoadingColumn/>;
		} else {
			return(
				<div id="agenda">

				</div>
			)
		}
	}
}
