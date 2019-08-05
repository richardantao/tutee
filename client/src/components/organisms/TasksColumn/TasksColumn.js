import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import Empty from "../../molecules/Empty";
import TaskRecord from "../../molecules/TaskRecord";
import styles from "./TasksColumn.css";

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
		axios({
			method: "GET",
			url: "/dashboard"		
		})
		.then(res => {
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
			return (
				<Col id="tasks-column">
					<Empty/>
				</Col>>
			)
		}
	}
}