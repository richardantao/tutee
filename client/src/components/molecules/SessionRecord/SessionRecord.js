import React from "react";
import { Col, Row} from "react-bootstrap";
import styles from "./SessionRecord.scss";

const SessionRecord = ({module, course, time, location}) => {
	return (
		<Row class="session-record">
			<Col>
				<div class="session-record-module">
					<h5>{module}</h5>
				</div>
				<div class="session-record-course">
					<h6>{course}</h6>
				</div>
			</Col>
			<Col>
				<div class="session-record-time">
					<p>{time}</p>
				</div>
				<div class="session-record-location">
					<p>{location}</p>
				</div>
			</Col>
		</Row>
	);
}

export default SessionRecord;