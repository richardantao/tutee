import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchTasks, editTask, createTask, updateTask, deleteTask } from "../../../actions/tasks.action";

import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import Modal from "../../molecules/Modal";
import Form from "../../molecules/Form";
import SelectReact from "../../atoms/Select";

import "./Tasks.scss";

class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			tasks: []
		}
	}

	componentDidMount() {
		this.props.fetchTasks();
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {
		
	}

	render() {
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
							<SelectReact placeholder="Filter by Course.."/>
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
				<Modal active={this.state.active} onClick={this.toggleDisplay}/>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	tasks: state.tasks.records
});

export default connect(mapStateToProps, { fetchTasks })(Tasks);