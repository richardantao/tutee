import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { fetchTasks, fetchPastTasks, editTask } from "../../../actions/data/tasks.action";
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
		tasks: [],
		edit: false,
		new: false
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		tasks: PropTypes.object.isRequired,
		fetchTasks: PropTypes.func.isRequired,
		fetchPastTasks: PropTypes.func.isRequired,
		editTask: PropTypes.func.isRequired
	};
	
	componentDidMount() {

		this.props.handleTasks();
	};

	componentDidUpdate() {
		const { error } = this.props;


	};

	handleTasks() {

		this.props.fetchTasks();
	};

	handlePastTasks() {

		this.props.fetchPastTasks();
	};

	newTaskModal = () => {
		this.setState({
			new: true
		});
	};

	editTaskModal = () => {
		this.setState({
			edit: true
		});
	};


	render() {
		const { tasks } = this.props;

		const taskRecords = tasks.map(({ _id, title, course, type, deadline }) => (
			<Row key={_id} className="task-record">
				<Col>
					<Row>
						<Col>
							<h5>{title}</h5>
							<h6>{course}</h6>
						</Col>
						<Col>
							<p>{type}</p>
							<p>{deadline}</p>
						</Col>
						<Col>
							<Button onClick={this.editTaskModal}></Button>
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
							<Button onClick={this.newTaskModal}><FontAwesomeIcon icon={faPlus}/> New Task</Button>
						</Col>
					</Row>
					<Row className="body tasks-body">	
						<Col>
							<Select placeholder="Filter by Course..">
								{this.props.courses}
							</Select>
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

export default connect(mapStateToProps, { fetchTasks, fetchPastTasks, editTask })(Tasks);