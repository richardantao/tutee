import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchDashItems } from "../../../actions/data/dashboard.action";

import { Button, Col, Row } from "reactstrap";

import Nav from "../../global/Nav";
import DashboardHeader from "../DashboardHeader";

import "./Dashboard.scss";

class Dashboard extends Component {
	state = {
		classes: [],
		tasks: [],
		evaluations: []
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		classes: PropTypes.object.isRequired,
		tasks: PropTypes.object.isRequired,
		evaluations: PropTypes.object.isRequired,
		fetchDashItems: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.fetchClasses();
		this.props.fetchTasks();
		this.props.fetchEvaluations();
	};

	componentDidUpdate() {
		const { error } = this.props;
	};

	classModal = () => {
		this.props.editClass();
	};

	editTaskModal = () => {

		this.props.editTask();
	};

	newTaskModal = () => {	

	};

	evaluationModal = () => {
		
	};

	render() {
		const { classes, tasks, evaluations } = this.props;

		const classRecords = classes.map(({ _id, module, course, time, location }) => (
			<Row key={_id} class="class-record">
				<Col>
					<h5>{module}</h5>				
					<h6>{course}</h6>
				</Col>
				<Col>
					<p>{time}</p>
					<p>{location}</p>
				</Col>
				<Col>
					<Button onClick={this.classModal}></Button>
				</Col>
			</Row>
		));

		const taskRecords = tasks.map(({ _id, title, course, type, deadline }) => (
			<Row key={_id} className="task-record">
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
		));

		const evaluationRecords = evaluations.map(({ _id, title, course, date, time, location}) => (
			<Row key={_id} className="eval-record">
				<Col>
					<h5>{title}</h5>
					<h6>{course}</h6>			
				</Col>
				<Col>
					<p>{date}</p>
					<p>{time}</p>
					<p>{location}</p>
				</Col>
				<Col>
					<Button onClick={this.evaluationModal}></Button>
				</Col>
			</Row>
		));

		return (
			<Fragment>
				<Helmet>
					<title>My Tutee | Dashboard</title>
				</Helmet>
				<Nav/>
				<div id="dashboard">
					<Row>
						<DashboardHeader/>
					</Row>
					<Row id="dashboard-columns" className="body">
						<Col id="classes-column">
							{classRecords}
						</Col>
						<Col id="tasks-column">
							{taskRecords}
						</Col>
						<Col id="evals-column">
							{evaluationRecords}
						</Col>
					</Row>
				</div>
			</Fragment>
		);
	};
};

const mapStateToProps = state => ({
	isAuthenticated: state.isAuthenticated,
	error: state.error,
	classes: state.dashClasses,
	tasks: state.dashTasks,
	evaluations: state.dashEvaluations
});

const mapDispatchToProps = { fetchDashItems };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);