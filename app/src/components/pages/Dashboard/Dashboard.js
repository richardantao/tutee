import React, { Component, Fragment }from "react";
import { Container, Row, Col} from "reactstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Nav from "../../organisms/Nav";
import SessionsColumn from "../../organisms/SessionsColumn";
import TasksColumn from "../../organisms/TasksColumn";
import EvalusColumn from "../../organisms/EvalusColumn";
import LoadingColumn from "../../molecules/LoadingColumn";
import Counter from "../../molecules/Counter";
import DateDisplay from "../../atoms/Date";
import "./Dashboard.scss";

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isLoading: true,
			user: [],
			sessions: [],
			tasks: [],
			evalus: []
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: false
		});

		axios.get("/dashboard/:userId")
		.then(res => {
			let user = res.data.users;
			let sessions = res.data.users;
			let tasks = res.data.tasks;
			let evalus = res.data.evalus;

			this.setState({
				isLoading: false,
				user: user,
				sessions: sessions,
				tasks: tasks,
				evalus: evalus
			});
		})
		.catch(err => {
			this.setState({
				errors: err,
				isLoading: false
			});
		});
	}

	render() {
		let { isLoading } = this.state;

		if(isLoading) {
			return <LoadingColumn/>
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
								<Button href="/dashboard/tasks/new" className=""><FontAwesomeIcon icon={faPlus} /> New Task</Button>
								<Counter type="Tasks" count="3"/>
							</Col>
							<Col className="dashboard-header">
								<h3>Evaluations</h3>
								<Counter type="Evaluations" count="2"/>
							</Col>
						</Row> <hr/>
						<Row id="dashboard-columns">
							<Col id="sessions-column">
								<SessionsColumn/>
							</Col>
							<Col id="tasks-column">
								<TasksColumn/>
							</Col>
							<Col id="evalus-column">
								<EvalusColumn/>
							</Col>
						</Row>
					</Container>
				</Fragment>
			)
		}
	}
}
