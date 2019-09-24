import React, { Component, Fragment }from "react";
import { Container, Row, Col} from "reactstrap";
import axios from "axios";
import Nav from "../../organisms/Nav";
import DashboardHeader from "../../organisms/DashboardHeader";
import SessionsColumn from "../../organisms/SessionsColumn";
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
						<Row>
							<DashboardHeader/>
						</Row>
						<Row id="dashboard-columns" className="body">
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
