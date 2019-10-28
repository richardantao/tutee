import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { 
	fetchTasks, editTask, createTask, updateTask, deleteTask 
} from "../../../actions/data/tasks.action";
import PropTypes from "prop-types";

import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import Select from "../../atoms/Select";

import "./Tasks.scss";

class Tasks extends Component {
	state = {

	};

	static propTypes = {
		fetchTasks: PropTypes.func.isRequired,
		tasks: PropTypes.object.isRequired
	};
	
	componentDidMount() {
		this.props.fetchTasks();
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {
		
	}

	render() {
		const { tasks } = this.props.task;

		// move to own component in /molecules
		const taskRecords = this.state.tasks.map(task => (
			<Row key={task.id} className="task-record">
				<Col>
					<div class="task-record-title">
						<h5>{task.title}</h5>
					</div>
					<div class="task-record-course">
						<h6>{task.course}</h6>
					</div>
				</Col>
				<Col>
					<div class="task-record-type">
						<p>{task.type}</p>
					</div>
					<div class="task-record-deadline">
						<p>{task.deadline}</p>
					</div>
				</Col>
			</Row>
		));
		
		return (
			<Fragment>
				<Helmet>
					<title>My Tutee | Tasks</title>
				</Helmet>
				<Nav />
				<div id="tasks">
					<Row className="header">
						<Col>
							<Header header="Tasks"/>
						</Col>
						<Col>
							<Button href="/tasks/new"><FontAwesomeIcon icon={faPlus}/> New Task</Button>
						</Col>
					</Row>
					<Row className="body tasks-body">	
						<Col>
							<Select placeholder="Filter by Course.."/>
						</Col>
						<Col>
							<Button href="/tasks" className="current">Current</Button>
							<Button href="/tasks/past" className="past">Past</Button>
						</Col>
					</Row>
					<Row>
						<Col>
							{taskRecords}
						</Col>
					</Row>
				</div>
			</Fragment>
		);
	};
};

const mapStateToProps = state => ({
	tasks: state.tasks
});

export default connect(mapStateToProps, { fetchTasks, editTask, createTask, updateTask, deleteTask })(Tasks);