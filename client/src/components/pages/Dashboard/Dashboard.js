import React, { Component, Fragment }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Nav from "../../organisms/Nav";
import ClassColumn from "../../organisms/ClassColumn";
import TasksColumn from "../../organisms/TasksColumn";
import EvalsColumn from "../../organisms/EvalsColumn";
import Counter from "../../molecules/Counter";
import DateDisplay from "../../atoms/Date";
import { Container, Row, Col} from "reactstrap";
import styles from "./Dashboard.css";

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		
		this.state ={

		}
	}
	
	componentDidMount() {
		this.setState({

		});
	}

	render() {
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
