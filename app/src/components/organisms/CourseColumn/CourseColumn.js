import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import Empty from "../../molecules/Empty";
import "./CourseColumn.scss";

export default class CourseColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			courses: [],
			errors: null
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: false
		});

		axios({
			method: "GET",
			url: "/courses/:userId"
		})
		.then(res => {
			this.setState({
				isLoading: false,
				courses: res.data.courses
			});
			
		})
		.catch(err => {
			this.setState({
				errors: err,
				isLoading: false
			});
		});
	}

	render() {
		const courses = this.props;
		let { isLoading } = this.state;

		if (isLoading) {
			return (
				<Col id="courses-list">
					<LoadingColumn/>
				</Col>
			)
		} else if (!isLoading && courses && courses.length > 0) {
			return (
				<Col id="courses-list">

				</Col>
			)
		} else {
			return (
				<Col id="courses-list">
					<Empty/>
				</Col>
			)
		}
	}
}
