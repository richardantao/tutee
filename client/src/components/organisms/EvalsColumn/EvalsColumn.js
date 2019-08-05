import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import Empty from "../../molecules/Empty";
import EvalRecord from "../../molecules/EvalRecord";
import styles from "./EvalsColumn.css";


export default class EvalColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			evals: []
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
				evals: res.data.evals 
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
		const { evals } = this.props;
		let isLoading = this.state.isLoading;

		if (isLoading) {
			return (
				<Col id="evals-column">
					<LoadingColumn/>
				</Col>
			)
		} else if (!isLoading && evals && evals.length > 0) {
			return (
				<Col id="evals-column">
						{evals.map(
							(evals, i) => 	
								<EvalRecord 
									key={i}
									title={eval.title} 
									course={eval.course} 
									date={eval.date}
									time={eval.time}
									location={eval.location}
								/>
						)}
					</Col>
			)
		} else {
			return (
				<Col id="evals-column">
					<Empty/>
				</Col>
				
			)
		}
	}
}
