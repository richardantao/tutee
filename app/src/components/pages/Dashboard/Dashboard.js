import React, { Component, Fragment } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import Nav from "../../organisms/Nav";
import DashboardHeader from "../../organisms/DashboardHeader";
import ClassesColumn from "../../organisms/ClassesColumn";
import TasksColumn from "../../organisms/TasksColumn";
import EvalusColumn from "../../organisms/EvalusColumn";
import LoadingColumn from "../../molecules/LoadingColumn";
import "./Dashboard.scss";

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isLoading: true,
			user: [],
			classes: [],
			tasks: [],
			evalus: []
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: false
		});

		axios.get("/dashboard")
		.then(res => {
			this.setState({
				isLoading: false,
				user: res.id,
				classes: res.classes,
				tasks: res.tasks,
				evals: res.evals
			});
		})
		.catch(err => {
			this.setState({
				errors: err,
				isLoading: false
			});
		});
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {
		
	}

	render() {
		let { isLoading } = this.state;

		if(isLoading) {
			return <LoadingColumn/>
		} else {
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
}
