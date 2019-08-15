import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./EvaluRecord.scss";

const EvaluRecord = ({title, course, date, time, location}) => {
	return (
		<Row class="evalu-record">
			<Col>
				<div class="evalu-record-title">
					<h5>{title}</h5>
				</div>
				<div class="evalu-record-course">
					<h6>{course}</h6>
				</div>
			</Col>
			<Col>
				<div class="evalu-record-date">
					<p>{date}</p>
				</div>
				<div class="evalu-record-time">
					<p>{time}</p>
				</div>
				<div class="evalu-record-location">
					<p>{location}</p>
				</div>
			</Col>
		</Row>
	);
}

export default EvaluRecord;