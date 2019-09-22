import React, { Component } from "react";
import LoadingColumn from "../../molecules/LoadingColumn";
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
		axios.get("http:localhost:3000/calendar/month")
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
				<div id="calendar-month">	

				</div>
			)
		}
	}
}
