import React from "react";
import { Col, Row } from "react-bootstrap";

const CourseRecord = ({ course, modules }) => {
    return (
        <Row class="course-record">
			<Col>
				<div class="course-record-title">
					<h5>{course}</h5>
				</div>
			</Col>
			<Col>
				<div class="course-record-modules">
					<h6>{modules}</h6>
				</div>
			</Col>
		</Row>
    )
}

export default CourseRecord;