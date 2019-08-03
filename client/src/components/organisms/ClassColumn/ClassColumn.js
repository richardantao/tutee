import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import ClassRecord from "../../molecules/ClassRecord";
import styles from "./ClassColumn";



export default class ClassColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			classes: []
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: true
		});

		axios.get("https://jsonplaceholder.typicode.com/users")
			.then(res => {
				const classes = res.classes
				this.setState({ classes: res.classes });
			});
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {

	}

	render() {
		const { classes } = this.props;
		let isLoading = this.state.isLoading;
	
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
			return null;
		}
	}
}