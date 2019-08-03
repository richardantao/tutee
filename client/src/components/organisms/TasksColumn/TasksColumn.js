import React, { Component } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import TaskRecord from "../../molecules/TaskRecord";
import styles from "./TasksColumn.css";

const taskData = [
	{
		title: "Preliminary Report",
		course: "Capstone Design",
		type: "Report",
		deadline: "2019-10-04"
	},
	{
		title: "",
		course: "",
		type: "",
		deadline: ""
	},
	{
		title: "",
		course: "",
		type: "",
		deadline: ""
	}
]

export default class TasksColumn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			tasks: [],
			errors: null
		};
	}
	componentDidMount() {
		axios.get("localhost:3000/dashboard").then(res => {
			res.tasks.results.map(task => ({
				title: `${task.title}`,
				type : `${task.type}`,
				deadline: `${task.deadline}`,
				completion: `${task.completion}`,
				note: `${task.note}`
			}))
		}).then(tasks => {
			this.setState({
				tasks,
				isLoading: false,
			});
		}).catch( err => {
			this.setState({ 
				errors: err,
				isLoading: false
			});
		});
	}

	componentDidUpdate() {
		
	}

	componentWillUnmount() {

	}

	render() {
		const { isLoading, tasks } = this.state;

		if (!isLoading) {
			return (
				<Col id="tasks-column">
					<LoadingColumn/>
				</Col>
			)
		} else if (isLoading && tasks && tasks.length > 0) {
			{tasks.map((task, i) =>	{
				const {title, course, type, deadline, completion, note} = task;
				return (
					<Col id="tasks-column">
						<TaskRecord 
							key={i}
							title={title} 
							course={course} 
							type={type}
							deadline={deadline}
							completion={completion}
							note={note}
						/>
					</Col>
				);	
			})}
		} else {
			return null;
		}
	}
}