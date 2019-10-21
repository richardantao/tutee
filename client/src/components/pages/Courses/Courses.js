import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchCourses, editCourse, createCourse, updateCourse, deleteCourse } from "../../../actions/courses.action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Col, Row} from "reactstrap";
import { Button } from "react-bootstrap";

import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";

import TermsColumn from "../../organisms/TermsColumn/TermsColumn";
import TermRecord from "../../molecules/TermRecord";
import CourseColumn from "../../organisms/CourseColumn/CourseColumn";
import CourseRecord from "../../molecules/CourseRecord";

import "./Courses.scss";

class Courses extends Component {
	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}
	
	render() {
		return (
			<Fragment>
				<Nav />
				<div id="courses">
					<Row className="header">
						<Col>
							<Header header="Courses"/>
						</Col>
						<Col>
							<Button href="/courses/years/edit">Manage Academics</Button>
							<Button href="/courses/years/new"><FontAwesomeIcon icon={faPlus}/> New Academic Year</Button>
						</Col>
					</Row>
					<Row className="body courses-body">
						<Col>
							<Row className="course-column">
								<Col>
									<h4>Terms</h4>
								</Col>
								<Col>
									<Button href="/courses/terms/new"><FontAwesomeIcon icon={faPlus} /></Button>
									<Button href="/courses/terms/edit"><FontAwesomeIcon icon={faEdit} /></Button>
								</Col>
							</Row>
						</Col>
						<Col>
							<Row className="course-column">
								<Col>	
									<h4>Courses</h4>
								</Col>
								<Col>
									<Button href="/courses/courses/new"><FontAwesomeIcon icon={faPlus} /></Button>
									<Button href="/courses/courses/edit"><FontAwesomeIcon icon={faEdit} /></Button>
								</Col>
							</Row>
						</Col>
						<Col>
							<Row className="course-column">
								<Col>
									<h4>Modules</h4>
								</Col>
								<Col>
									<Button href="/courses/modules/new"><FontAwesomeIcon icon={faPlus} /></Button>
									<Button href="/courses/modules/edit"><FontAwesomeIcon icon={faEdit} /></Button>
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
		)
	}
}

const mapStateToProps = state => {
	
}

export default connect(mapStateToProps, { fetchCourses, editCourse, createCourse, updateCourse, deleteCourse })(Courses);