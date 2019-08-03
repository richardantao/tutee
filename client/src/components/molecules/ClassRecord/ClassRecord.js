import React from "react";
import { Col, Row} from "react-bootstrap";

const ClassRecord = ({module, course, time, location}) => {
	return (
		<Row class="class-record">
			<Col>
				<div class="class-record-module">
					<h5>{module}</h5>
				</div>
				<div class="class-record-course">
					<h6>{course}</h6>
				</div>
			</Col>
			<Col>
				<div class="class-record-time">
					<p>{time}</p>
				</div>
				<div class="class-record-location">
					<p>{location}</p>
				</div>
			</Col>
		</Row>
	);
}

export default ClassRecord;