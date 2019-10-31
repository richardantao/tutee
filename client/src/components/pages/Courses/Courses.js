import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import {
	fetchYears, editYear, createYear, updateYear, deleteYear
} from "../../../actions/data/years.action";
import {
	fetchTerms, editTerm, createTerm, updateTerm, deleteTerm
} from "../../../actions/data/terms.action";
import { 
	fetchCourses, editCourse, createCourse, updateCourse, deleteCourse 
} from "../../../actions/data/courses.action";
import {
	fetchModules, editModule, createModule, updateModule, deleteModule
} from "../../../actions/data/modules.action";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "reactstrap";
import { Button } from "react-bootstrap";

import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";

import TermsColumn from "../../organisms/TermsColumn/TermsColumn";
import TermRecord from "../../molecules/TermRecord";
import CourseColumn from "../../organisms/CourseColumn/CourseColumn";
import CourseRecord from "../../molecules/CourseRecord";

import "./Courses.scss";

class Courses extends Component {
	state = {
		years: [],
		terms: [],
		courses: [],
		modules: []
	};

	static propTypes = {
		isAuthenticated: PropTypes.func,
		error: PropTypes.object.isRequired
	};

	componentDidMount() {

		// fetch all data || in future release, fetch child data after selecting parent element
		this.props.fetchYears();
		this.props.fetchTerms();
		this.props.fetchCourses();
		this.props.fetchModules();
	};

	
	
	render() {
		return (
			<Fragment>
				<Helmet>
					<title>My Tutee | Courses</title>
				</Helmet>
				<Nav />
				<div id="courses">
					<Row className="header">
						<Col>
							<Header header="Courses"/>
						</Col>
						<Col>
							<Button onClick={this}>Manage Academics</Button>
							<Button onClick={this}><FontAwesomeIcon icon={faPlus}/> New Academic Year</Button>
						</Col>
					</Row>
					<Row className="body courses-body">
						<Col>
							<Row className="course-column">
								<Col>
									<h4>Terms</h4>
								</Col>
								<Col>
									<Button onClick={this}><FontAwesomeIcon icon={faPlus} /></Button>
									<Button onClick={this}><FontAwesomeIcon icon={faEdit} /></Button>
								</Col>
							</Row>
						</Col>
						<Col>
							<Row className="course-column">
								<Col>	
									<h4>Courses</h4>
								</Col>
								<Col>
									<Button onClick={this}><FontAwesomeIcon icon={faPlus} /></Button>
									<Button onClick={this}><FontAwesomeIcon icon={faEdit} /></Button>
								</Col>
							</Row>
						</Col>
						<Col>
							<Row className="course-column">
								<Col>
									<h4>Modules</h4>
								</Col>
								<Col>
									<Button onClick={this}><FontAwesomeIcon icon={faPlus} /></Button>
									<Button onClick={this}><FontAwesomeIcon icon={faEdit} /></Button>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<TermsColumn/>
						<CourseColumn/>
						<Col className="course-details">

						</Col>
					</Row>
				</div>
			</Fragment>
		);
	};
};

const mapStateToProps = state => ({
	isAuthenticated: state.isAuthenticated,
	error: state.error
});

export default connect(mapStateToProps, { 
	fetchYears, editYear, createYear, updateYear, deleteYear,
	fetchTerms, editTerm, createTerm, updateTerm, deleteTerm,
	fetchCourses, editCourse, createCourse, updateCourse, deleteCourse, 
	fetchModules, editModule, createModule, updateModule, deleteModule
})
(Courses);