import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { fetchEvaluations, fetchPastEvaluations, editEvaluation, } from "../../../actions/data/evaluations.action";
import PropTypes from "prop-types";

import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import SelectReact from "../../atoms/Select";
import { Button } from "react-bootstrap";

import "./Evaluations.scss";

class Evaluations extends Component{
	state = {
		evaluations: [],
		edit: false,
		new: false
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		evaluations: PropTypes.object.isRequired,
		fetchEvaluations: PropTypes.func.isRequired, 
		fetchPastEvaluations: PropTypes.func.isRequired, 
		editEvaluation: PropTypes.func.isRequired
	};

	componentDidMount() {

		this.props.handleEvaluations();
	};

	componentDidUpdate() {
		const { error } = this.props;
	
	};

	handleEvaluations = () => {
		this.props.fetchEvaluations();
	};

	handlePastEvaluations = () => {

		this.props.fetchPastEvaluations();
	};

	newEvaluationModal = () => {
		this.setState({
			edit: true
		});
	};

	editEvaluationModal = () => {
		this.setState({
			new: true
		});
	};

	render() {
		const { evaluations } = this.props;

		const evaluationRecords = evaluations.map(({ _id, title, course, date, time, location}) => (
			<Row class="eval-record" key={_id}>
			<Col>
				<h5>{title}</h5>
				<h6>{course}</h6>			
			</Col>
			<Col>
				<p>{date}</p>
				<p>{time}</p>
				<p>{location}</p>
			</Col>
		</Row>
		));
		 
		return (
			<Fragment>
				<Helmet>
					<title>My Tutee | Evaluations</title>
				</Helmet>
				<Nav/>
				<div id="evaluations">
					<Row className="header">
						<Col>
							<Header header="Evaluations"/> 
						</Col>
						<Col>
							<Button onClick={this.newEvaluationModal}><FontAwesomeIcon icon={faPlus}/> New Evaluation</Button>
						</Col>
					</Row>
					<Row className="body evals-body">
						<Col>
							<SelectReact placeholder="Filter by Course.."/>
						</Col>
						<Col>
							<Button onClick={this.handleEvaluations} className="current">Current</Button>
							<Button onClick={this.handlePastEvaluations} className="past">Past</Button>
						</Col>	
					</Row>
				</div>
			</Fragment>
		);	
	};
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error,
	evaluations: state.evaluations
});

export default connect(mapStateToProps, { fetchEvaluations, fetchPastEvaluations, editEvaluation })(Evaluations);