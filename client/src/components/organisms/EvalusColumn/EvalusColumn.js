import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import Empty from "../../molecules/Empty";
import EvaluRecord from "../../molecules/EvaluRecord";
import styles from "./EvalusColumn.scss";


export default class EvaluColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			evalus: []
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: false,
		});

		axios({
			method: "GET",
			url: "/dashboard"
		})
		.then(res => {
			this.setState({ 
				evalus: res.data.evalus 
			});
		})
		.catch(err => {
			this.setState({
				err,
				isLoading: false
			});
		});
	}

	componentDidUpdate() {

	}

	render() {
		
		let { isLoading, evalus } = this.state;

		if (isLoading) {
			return <LoadingColumn/>
		} else if (!isLoading && evalus && evalus.length > 0) {
			evalus.map(
				(evalu) => {
					let { id, title, course, date, time, location } = evalu;
					return (
						<EvaluRecord 
							key={id}
							title={title} 
							course={course} 
							date={date}
							time={time}
							location={location}
						/>
					)
				});
		} else {
			return <Empty/>
		}
	}
}
