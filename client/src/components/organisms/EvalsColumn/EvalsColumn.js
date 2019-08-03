import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import EvalRecord from "../../molecules/EvalRecord";
import styles from "./EvalsColumn.css";

export default class EvalColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			data: []
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: true,
		});

		axios.get("").then(res => {
			this.setState({ data: res.data });
		});
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {

	}

	render() {
		const { evals } = this.props;
		let isLoading = this.state.isLoading;

		if (isLoading) {
			return (
				<Col>
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
			return null;
		}
	}
}
