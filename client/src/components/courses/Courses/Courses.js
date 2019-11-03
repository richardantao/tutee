import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { fetchYears, editYear } from "../../../actions/data/years.action";
import { fetchTerms, editTerm } from "../../../actions/data/terms.action";
import { fetchCourses, editCourse } from "../../../actions/data/courses.action";
import { fetchModules, editModule} from "../../../actions/data/modules.action";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "reactstrap";

import Nav from "../../global/Nav";
import Header from "../../global/Header";
import YearEditModal from "../../years/YearEditModal";
import YearNewModal from "../../years/YearNewModal";
import TermEditModal from "../../terms/TermEditModal";
import TermNewModal from "../../terms/TermNewModal";
import CourseEditModal from "../../courses/CourseEditModal";
import CourseNewModal from "../../courses/CourseNewModal";
import ModuleEditModal from "../../modules/ModuleEditModal";
import ModuleNewModal from "../../modules/ModuleNewModal";

import "./Courses.scss";

class Courses extends Component {
	state = {
		years: [],
		terms: [],
		courses: [],
		modules: [],
		openEditYear: false,
		openNewYear: false,
		openEditTerm: false,
		openNewTerm: false,
		openEditCourse: false,
		openNewCourse: false,
		openEditModule: false,
		openNewModule: false,
	};

	static propTypes = {
		isAuthenticated: PropTypes.func,
		error: PropTypes.object.isRequired,
		fetchYears: PropTypes.func.isRequired,
		editYear: PropTypes.func.isRequired,
		fetchTerms: PropTypes.func.isRequired,
		editTerm: PropTypes.func.isRequired,
		fetchCourses: PropTypes.func.isRequired,
		editCourse: PropTypes.func.isRequired,
		fetchModules: PropTypes.func.isRequired,
		editModule: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.fetchYears();
		// this.props.fetchTerms();
		// this.props.fetchCourses();
		// this.props.fetchModules();
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

	
	
	render() {
		const { 
			openEditYear, openNewYear, openEditTerm, openNewTerm, 
			openEditCourse, openNewCourse, openEditModule, openNewModule
		} = this.state;
		const { years, terms, courses, modules } = this.props;

		const yearRecords = years.map(({ _id, title }) => (
			<option key={_id}>	
				{title}
			</option>
		));

		const termRecords = terms.map(({ _id, title, start, end }) => (
            <Row key={_id}>
                <Col>
                    <h5>{title}</h5>
                </Col>
                <Col>
                    <h6>{start}</h6>
                    <h6>{end}</h6>
                </Col>
                <Col>
                    <Button onClick={this.openEditModal}></Button>
                </Col>
            </Row>
		));
		
		const courseRecords = courses.map(({ _id, title, start, end }) => (
			<Row>
				<Col>
				
				</Col>
				<Col>
				
				</Col>
			</Row>
		));

		const moduleRecords = modules.map(({ _id, title }) => (
			<Row key={_id}>
				<Col>

				</Col>
				<Col>
				
				</Col>
			</Row>
		));

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
						<Col className="terms-column">
							{termRecords}
						</Col>
						<Col className="courses-list">
							{courseRecords}
						</Col>
						<Col className="course-details">

						</Col>
					</Row>

					{ openEditYear ? (
						<YearEditModal className="modal"/>
					): null }
					{ openNewYear ? (
						<YearNewModal className="modal"/>
					): null }
					{ openEditTerm ? (
						<TermEditModal className="modal"/>
					): null }
					{ openNewTerm ? (
						<TermNewModal className="modal"/>
					): null }
					{ openEditCourse ? (
						<CourseEditModal className="modal"/>
					): null }
					{ openNewCourse ? (
						<CourseNewModal className="modal"/>
					): null }
					{ openEditModule ? (
						<ModuleEditModal className="modal"/>
					): null }
					{ openNewModule ? (
						<ModuleNewModal className="modal"/>
					): null }
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
	fetchYears, editYear, fetchTerms, editTerm, 
	fetchCourses, editCourse, fetchModules, editModule, 
})(Courses);