import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { 
	fetchClasses, editClass, updateClass, deleteClass 
} from "../../../actions/data/classes.action";
import { 
	fetchTasks, editTask, createTask, updateTask, deleteTask 
} from "../../../actions/data/tasks.action";
import { 
	fetchEvaluations, editEvaluation, updateEvaluation, deleteEvaluation 
} from "../../../actions/data/evaluations.action";

import { Col, Row } from "reactstrap";

import Nav from "../../organisms/Nav";
import DashboardHeader from "../../organisms/DashboardHeader";
import ClassesColumn from "../../organisms/ClassesColumn";
import TasksColumn from "../../organisms/TasksColumn";
import EvalusColumn from "../../organisms/EvalusColumn";
import LoadingColumn from "../../molecules/LoadingColumn";

import "./Dashboard.scss";

class Dashboard extends Component {
	state = {

	};

	static propTypes = {

	};

	componentDidMount() {
		
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {
		
	}

	render() {
		return (
			<Fragment>
				<Helmet>
					<title>My Tutee | Dashboard</title>
				</Helmet>
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

const mapStateToProps = state => ({
	
});

export default connect(mapStateToProps, { 
	fetchClasses, editClass, updateClass, deleteClass,
	fetchTasks, editTask, createTask, updateTask, deleteTask,
	fetchEvaluations, editEvaluation, updateEvaluation, deleteEvaluation
})(Dashboard);