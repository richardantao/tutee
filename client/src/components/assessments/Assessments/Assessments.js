import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { fetchAssessments, fetchPastAssessments } from "../../../actions/data/assessments.action";
import PropTypes from "prop-types";

import { Button, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../global/Nav";
import Header from "../../global/Header";
import AssEditModal from "../AssEditModal";
import AssNewModal from "../AssNewModal";
import Select from "../../global/Select";

import "./Assessments.scss";

class Assessments extends Component{
	state = {
		editModal: false,
		newModal: false
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		assessment: PropTypes.object.isRequired,
		fetchAssessments: PropTypes.func.isRequired, 
		fetchPastAssessments: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.fetchAssessments();
	};

	editAssessmentModal = () => {
		this.setState({
			editModal: true
		});
	};

	newAssessmentModal = () => {
		this.setState({
			newModal: true
		});
	};

	render() {
		const { editModal, newModal } = this.state;
		const { assessments } = this.props.assessment;

		const assessmentRecords = assessments.map(({ _id, title, course, date, time, location}) => (
			<Row class="ass-record" key={_id}>
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
				<Button type="button" onClick={this.editAssessmentModal}><FontAwesomeIcon icon={faEdit}/></Button>
			</Col>
		</Row>
		));
		 
		return (
			<Fragment>
				<Helmet>
					<title>My Tutee | Assessments</title>
				</Helmet>
				<Nav/>
				<div id="assessments">
					<Row className="header">
						<Col>
							<Header header="Assessments"/> 
						</Col>
						<Col>
							<Button onClick={this.newAssessmentModal}><FontAwesomeIcon icon={faPlus}/> New Assessment</Button>
						</Col>
					</Row>
					<Row className="body ass-body">
						<Col>
							<Select placeholder="Filter by Course.."/>
						</Col>
						<Col>
							<Button onClick={this.fetchAssessments} className="current">Current</Button>
							<Button onClick={this.fetchPastAssessments} className="past">Past</Button>
						</Col>	
					</Row>
					<Row>
						<Col>
							{assessmentRecords}
						</Col>
					</Row>

					{ editModal ? (
						<AssEditModal className="modal"/>
					): null }
					{ newModal ? (
						<AssNewModal className="modal"/>
					): null }
				</div>
			</Fragment>
		);	
	};
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error,
	assessment: state.assessment
});

const mapDispatchToProps = { fetchAssessments, fetchPastAssessments };

export default connect(mapStateToProps, mapDispatchToProps)(Assessments);