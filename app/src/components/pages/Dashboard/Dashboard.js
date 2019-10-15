import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchClasses, editClass, createClass, updateClass, deleteClass } from "../../../actions/classes.action";
import { fetchTasks, editTask, createTask, updateTask, deleteTask } from "../../../actions/tasks.action";
import { fetchEvaluations, editEvaluation, createEvaluation, updateEvaluation, deleteEvaluation } from "../../../actions/evaluations.action";

import { Col, Row } from "reactstrap";

import Nav from "../../organisms/Nav";
import DashboardHeader from "../../organisms/DashboardHeader";
import ClassesColumn from "../../organisms/ClassesColumn";
import TasksColumn from "../../organisms/TasksColumn";
import EvalusColumn from "../../organisms/EvalusColumn";
import LoadingColumn from "../../molecules/LoadingColumn";

import "./Dashboard.scss";

export default class Dashboard extends Component {
	componentDidMount() {
		
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {
		
	}

	render() {
		return (
			<Fragment>
				<Nav />
				<div id="dashboard">
					<Row>
						<DashboardHeader/>
					</Row>
					<Row id="dashboard-columns" className="body">
						<Col id="classes-column">
							<ClassesColumn/>
						</Col>
						<Col id="tasks-column">
							<TasksColumn/>
						</Col>
						<Col id="evals-column">
							<EvalusColumn/>
						</Col>
					</Row>
				</div>
			</Fragment>
		)
	}
}
