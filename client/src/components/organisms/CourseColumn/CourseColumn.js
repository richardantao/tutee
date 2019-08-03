import React, { Component } from "react";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import styles from "./CourseColumn.css";
import axios from "axios";

export default class CourseColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			courses: [],
			errors: null
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: true
		});

		axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
			const courses = res.courses;
			this.setState({ courses: courses });
		});
	}

	render() {
		const courses = this.props;
		let isLoading = this.state.isLoading;

		if (isLoading) {
			return (
				<Col className="courses-list">
					<LoadingColumn/>
				</Col>
			)
		} else if (!isLoading && courses && courses.length > 0) {
			return (
				<Col className="courses-list">

				</Col>
			)
		} else {
			return null;
		}
	}
}
