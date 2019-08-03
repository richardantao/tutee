import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import Form from "../../molecules/Form";
import SelectReact from "../../atoms/Select";
import { Button } from "react-bootstrap";
import styles from "./Tasks.css";

export default class Tasks extends Component {

	constructor(props) {
		super(props);
		this.state = {
			addingTask: false,
			tasks: []
		}
	}

	componentDidMount() {
		this.setState({
			
		});

		axios.get("https://jsonplaceholder.typicode.com/users")
			.then(res => {
				const tasks = res.tasks;
				this.setState({

				});
			});
	}

	componentDidUpdate() {

	}

	render() {
		let { addingTask } = this.state;

		if (addingTask === false) {
			return (
				<React.Fragment>
					<Nav />
					<Container id="tasks">
						<Row className="header">
							<Col>
								<Header header="Tasks"/>
							</Col>
							<Col>
								<Button href="/tasks/create"><FontAwesomeIcon icon={faPlus} /> New Task</Button>
							</Col>
						</Row> <hr/>
						<Row>	
							<Col>
								<SelectReact placeholder="Filter by Course.."/>
							</Col>
							<Col>
								<Button href="/tasks" className="current">Current</Button>
								<Button href="/tasks/past" className="past">Past</Button>
							</Col>
							<hr/>
						</Row>
					</Container>
				</React.Fragment>
			)
		} else {
			return (
				<React.Fragment>
					<Nav />
					<Container id="tasks">
						<Row className="header">
							<Col>
								<Header header="Tasks"/>
							</Col>
							<Col>
								<Button href="/tasks/newTask"><FontAwesomeIcon icon={faPlus} /> New Task</Button>
							</Col>
						</Row> <hr/>
						<Row>
							<Col>
								<Row>
									<Col>
										<SelectReact placeholder="Filter by Course.."/>
									</Col>
									<Col>
										<Button href="/tasks" className="current">Current</Button>
										<Button href="/tasks/past" className="past">Past</Button>
									</Col>
								</Row>
								<hr/>
							</Col>
							<Col>
								<Form 
									header="Task" 
									action="/newTask" 
									page="/tasks"
									course="tasksCourse"
									module="tasksModule"
									deadline="tasksDeadline"
									type="tasksType"
									notes="tasksNotes"
								/>
							</Col>
						</Row>
					</Container>
				</React.Fragment>
			)
		}
	}
}