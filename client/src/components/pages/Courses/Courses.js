import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import { Container, Row, Col} from "reactstrap";
import { Button } from "react-bootstrap";
import styles from "./Courses.css";
import TermsColumn from "../../organisms/TermsColumn/TermsColumn";
import TermRecord from "../../molecules/TermRecord";
import CourseColumn from "../../organisms/CourseColumn/CourseColumn";
import CourseRecord from "../../molecules/CourseRecord";

// Course componentr
export default function Courses() {
	return (
		<React.Fragment>
			<Nav />
			<Container id="courses">
				<Row className="header">
					<Col>
						<Header header="Courses"/>
					</Col>
					<Col>
						<Button href="/courses/years/edit">Manage Academics</Button>
						<Button href="/courses/years/create"><FontAwesomeIcon icon={faPlus} /> New Academic Year</Button>
					</Col>
				</Row> <hr/>
				<Row>
					<Col>
						<Row className="course-header">
							<Col>
								<h4>Terms</h4>
							</Col>
							<Col>
								<Button href="/courses/terms/create"><FontAwesomeIcon icon={faPlus} /></Button>
								<Button href="/courses/terms/edit"><FontAwesomeIcon icon={faEdit} /></Button>
							</Col>
						</Row>
					</Col>
					<Col>
						<Row className="course-header">
							<Col>	
								<h4>Courses</h4>
							</Col>
							<Col>
								<Button href="/courses/courses/create"><FontAwesomeIcon icon={faPlus} /></Button>
								<Button href="/courses/courses/edit"><FontAwesomeIcon icon={faEdit} /></Button>
							</Col>
						</Row>
					</Col>
					<Col>
						<Row>
							<h4>Course Details</h4>
						</Row>
					</Col>
				</Row> <hr/>
				<Row>
					<TermsColumn/>
					<CourseColumn/>
					<Col className="course-details">
					yes, another column
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}