import React, { Component, Fragment }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Nav from "../../organisms/Nav";
import LoadingColumn from "../../molecules/LoadingColumn";
import ClassColumn from "../../organisms/ClassColumn";
import TasksColumn from "../../organisms/TasksColumn";
import EvalsColumn from "../../organisms/EvalsColumn";
import Counter from "../../molecules/Counter";
import DateDisplay from "../../atoms/Date";
import { Container, Row, Col} from "reactstrap";
import styles from "./Dashboard.css";
import axios from "axios";

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isLoading: true,
			classes: [],
			tasks: [],
			evals: []
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: false
		});
		axios({
			method: "GET",
			url: "/dashboard"
		})
		.then(res => {
			this.setState({
				isLoading: false,
				classes: res.data.classes,
				tasks: res.data.tasks,
				evals: res.data.evals
			});
		})
		.catch(err => {
			this.setState({
				err,
				isLoading: false
			});
		});
	}

	render() {
		let { isLoading } = this.state;

		if(isLoading) {
			return(
				<Fragment>
					<LoadingColumn/>
				</Fragment>
			)
		} else {
			return (
				<Fragment>
					<Nav />
					<Container id="dashboard">
						<Row className="header">
							<Col className="dashboard-header">
								<h3>Today</h3>
								<DateDisplay />
								<Counter type="Classes" count="5"/>	
							</Col>
							<Col className="dashboard-header">
								<h3>Tasks</h3>
								<Button href="/dashboard/tasks/create" className=""><FontAwesomeIcon icon={faPlus} /> New Task</Button>
								<Counter type="Tasks" count="3"/>
							</Col>
							<Col className="dashboard-header">
								<h3>Evaluations</h3>
								<Counter type="Evaluations" count="2"/>
							</Col>
						</Row> <hr/>
						<Row id="dashboard-columns">
							<ClassColumn/>
							<TasksColumn/>
							<EvalsColumn/>
						</Row>
					</Container>
				</Fragment>
			)
		}
	}
}
