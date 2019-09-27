import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import Modal from "../../molecules/Modal";
import Form from "../../molecules/Form";
import SelectReact from "../../atoms/Select";
import { Button } from "react-bootstrap";
import "./Tasks.scss";

export default class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			displayForm: false,
			tasks: []
		}
	}

	componentDidMount() {

		axios.get("http://localhost:3000/tasks")
		.then(res => {
			this.setState({
				isLoading: false,
				tasks: [] // change to res.BLANK
			});
		})
		.catch(err => {
			throw err;
		});
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {
		
	}

	render() {
		let { displayForm } = this.state;

		if (displayForm === false) {
			return (
				<Fragment>
					<Nav />
					<Container id="tasks">
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
					</Container>
					<Modal active={this.state.active} onClick={this.toggleDisplay}/>
				</Fragment>
			)
		} else {
			return (
				<Fragment>
					<Nav />
					<Container id="tasks">
						<Row className="header">
							<Col>
								<Header header="Tasks"/>
							</Col>
							<Col>
								<Button href="/tasks/new"><FontAwesomeIcon icon={faPlus} /> New Task</Button>
							</Col>
						</Row>
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
							</Col>
							<Col>
								<Form 
									header="Task" 
									action="tasks/create" 
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
				</Fragment>
			)
		}
	}
}