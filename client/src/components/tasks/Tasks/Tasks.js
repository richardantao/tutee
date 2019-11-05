import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { fetchTasks, fetchPastTasks } from "../../../actions/data/tasks.action";
import PropTypes from "prop-types";

import { Button, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../global/Nav";
import Header from "../../global/Header";
import EditModal from "../TaskEditModal";
import NewModal from "../TaskNewModal";
import Select from "../../global/Select";

import "./Tasks.scss";

class Tasks extends Component {
	state = {
		tasks: [],
		editModal: false,
		newModal: false
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		tasks: PropTypes.object.isRequired,
		fetchTasks: PropTypes.func.isRequired,
		fetchPastTasks: PropTypes.func.isRequired
	};
	
	componentDidMount() {

		this.props.handleTasks();
	};

	componentDidUpdate(prevProps) {
		const { error, isAuthenticated } = this.props;

		if(error) {
			if(!isAuthenticated) {
				this.setState({

				});
			} else {
				this.setState({

				});
			};
		} else {
			this.setState({

			});
		};
	};

	handleTasks() {

		this.props.fetchTasks();
	};

	handlePastTasks() {

		this.props.fetchPastTasks();
	};

	newTaskModal = () => {
		this.setState({
			newModal: true
		});
	};

	editTaskModal = () => {
		this.setState({
			editModal: true
		});
	};

	render() {
		const { editModal, newModal } = this.state;
		const { tasks, courses } = this.props; // have to define courses in state

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

		const courseOptions = courses.map(({ _id, course}) => (
			<option key={_id} className="" value={course}>
				{course}
			</option>
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
								{courseOptions}
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

					{ editModal ? (
						<EditModal className="modal"/>
					): null }
					{ newModal ? (
						<NewModal className="modal"/>
					): null }
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

const mapDispatchToProps = { fetchTasks, fetchPastTasks };

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);