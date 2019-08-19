import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import Empty from "../../molecules/Empty";
import TaskRecord from "../../molecules/TaskRecord";
import "./TasksColumn.scss";

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
			url: "/dashboard/:userId"		
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

		if (isLoading) {
			return <LoadingColumn/>
		} else if (!isLoading && tasks && tasks.length > 0) {
			tasks.map(
				(task) =>	{
					let {id, title, course, type, deadline, completion, note} = task;
					return (
							<TaskRecord 
								key={id}
								title={title} 
								course={course} 
								type={type}
								deadline={deadline}
								completion={completion}
								note={note}
							/>
				)	
			});
		} else {
			return <Empty/>
		}
	}
}