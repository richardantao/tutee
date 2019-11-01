import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { fetchTasks } from "../../../actions/data/tasks.action";
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
		tasks: []
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		tasks: PropTypes.object.isRequired
	};
	
	componentDidMount() {
		this.props.handleFetchTasks();
	};

	componentDidUpdate() {

	};

	handleTasks() {
		this.props.fetchTasks();
	};

	handlePastTasks() {
		// this.props.fetchPastTasks();s
	};

	newTaskModal = () => {

	};

	editTaskModal = () => {

	};


	render() {
		const { tasks } = this.props.tasks;

		const taskRecords = tasks.map(({ _id, title, course, type, deadline }) => (
			<Row key={_id} className="task-record">
				<Col>
					<Row>
						<Col>
							<h5>{title}</h5>
							<p>{type}</p>
						</Col>
						<Col>
							<h6>{course}</h6>
							<p>{deadline}</p>
						</Col>
						<Col>
							<Button onClick={this.editTask}></Button>
						</Col>
					</Row>
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
							<Button onClick={this.newTaskForm}><FontAwesomeIcon icon={faPlus}/> New Task</Button>
						</Col>
					</Row>
					<Row className="body tasks-body">	
						<Col>
							<Select placeholder="Filter by Course.."/>
						</Col>
						<Col>
							<Button onClick={this.handleTasks} className="current">Current</Button>
							<Button onClick={this.handlePastTasks} className="past">Past</Button>
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
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error,
	tasks: state.tasks
});

export default connect(mapStateToProps, { fetchTasks/*, fetchPastTasks */ })(Tasks);