import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import Form from "../../molecules/Form";
import SelectReact from "../../atoms/Select";
import { Button } from "react-bootstrap";
import "./Evaluations.scss";

export default class Evaluations extends Component{
	constructor(props) {
		super(props);
		
		this.state= {
			isLoading: true,
			displayForm: false,
			evals: []
		}
	}
	
	componentDidMount() {
		axios({
			method: "GET",
			url: "/evaluations"
		})
		.then(res => {
			const evals = res.evals;
			this.setState({
				isLoading: false
			});
		})
		.catch(err => {
			throw err;
		});

	}

	render() {
		let { displayForm } = this.state;

		if (displayForm === false) {
			return (
				<Fragment>
					<Nav />
					<Container id="evaluations">
						<Row className="header">
							<Col>
								<Header 
									header="Evaluations"
								/> 
							</Col>
							<Col>
								<Button href="/evaluations/create"><FontAwesomeIcon icon={faPlus} /> New Evaluation</Button>
							</Col>
						</Row>
						<Row>
							<Col>
								<SelectReact placeholder="Filter by Course.."/>
							</Col>
							<Col>
								<Button href="/evaluations" className="current">Current</Button>
								<Button href="/evaluations/past" className="past">Past</Button>
							</Col>	
						</Row>
					</Container>
				</Fragment>
			)
		} else {
			return (
				<Fragment>
					<Nav />
					<Container id="evaluations">
						<Row className="header">
							<Col>
								<Header 
									header="Evaluations"
								/> 
							</Col>
							<Col>
								<Button href="/evaluations/new"><FontAwesomeIcon icon={faPlus} /> New Evaluation</Button>
							</Col>
						</Row>
						<Row>
							<Col>
								<Row>
									<Col>
										<SelectReact placeholder="Filter by Course.."/>
									</Col>
									<Col>
										<Button href="/evaluations" className="current">Current</Button>
										<Button href="/evaluations/past" className="past">Past</Button>
									</Col>
								</Row>
							</Col>
							<Col>
								<Form 
									header="Evaluation" 
									action="/NewEvaluation" 
									page="/evaluations"
									course="evaluationsCourse"
									module="evaluationsModule"
									deadline="evaluationsDeadline"
									type="evaluationsType"
									notes="evaluationsNotes"
								/>
							</Col>
						</Row>
					</Container>
				</Fragment>
			)
		}
	}
}