import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import Empty from "../../molecules/Empty";
import ClassRecord from "../../molecules/ClassRecord";
import styles from "./ClassColumn";



export default class ClassColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			classes: []
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: false
		});

		axios({
			method: "GET",
			url: "/dashboard"
		})
		.then(res => {
				this.setState({ 
					isLoading: false,
					classes: res.data.classes
				});
			})
			.catch(err => {
				this.setState({
					err,
					isLoading: false
				})
			})
	}

	componentDidUpdate() {

	}

	render() {
		const { classes } = this.props;
		let { isLoading } = this.state;
	
		if (isLoading) {
			return (
				<Col>
					<LoadingColumn/>
				</Col>
			)
		} else if (!isLoading && classes && classes.length > 0) {
			return (
				<Col id="classes-column">
					{classes.map(
						(classes, i) => 	
							<ClassRecord 
								key={i}
								module={classes.title} 
								course={classes.course} 
								time={classes.time}
								location={classes.location}
							/>
					)}
				</Col>
			)
		} else {
			return (
				<Empty/>
			)
		}
	}
}