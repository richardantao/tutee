import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { fetchEvaluations, fetchPastEvaluations, editEvaluation, } from "../../../actions/data/evaluations.action";
import PropTypes from "prop-types";

import { Button, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../global/Nav";
import Header from "../../global/Header";
import EditModal from "../EvalEditModal";
import NewModal from "../EvalNewModal";
import Select from "../../global/Select";

import "./Evaluations.scss";

class Evaluations extends Component{
	state = {
		evaluations: [],
		editModal: false,
		newModal: false
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

	componentDidUpdate(prevProps) {
		const { error, isAuthenticated } = this.props;

		if(error) {
			if(!isAuthenticated) {
				this.setState({

				});
			} else {
				this.setState({

				});
			};
		} else {
			this.setState({

			});
		};
	};

	handleEvaluations = () => {
		this.props.fetchEvaluations();
	};

	handlePastEvaluations = () => {

		this.props.fetchPastEvaluations();
	};

	editEvaluationModal = () => {
		this.setState({
			editModal: true
		});
	};

	newEvaluationModal = () => {
		this.setState({
			newModal: true
		});
	};

	render() {
		const { editModal, newModal } = this.state;
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
			<Col>
				<Button type="button" onClick={this.editEvaluationModal}></Button>
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
							<Select placeholder="Filter by Course.."/>
						</Col>
						<Col>
							<Button onClick={this.handleEvaluations} className="current">Current</Button>
							<Button onClick={this.handlePastEvaluations} className="past">Past</Button>
						</Col>	
					</Row>
					<Row>
						<Col>
							{evaluationRecords}
						</Col>
					</Row>

					{ editModal ? (
						<EditModal className="modal"/>
					): null }
					{ newModal ? (
						<NewModal className="modal"/>
					): null }
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