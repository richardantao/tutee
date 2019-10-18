import React from "react";
import { Col, Row } from "react-bootstrap";
import "./EvalRecord.scss";

const EvalRecord = ({title, course, date, time, location}) => {
	return (
		<Row class="eval-record">
			<Col>
				<div class="eval-record-title">
					<h5>{title}</h5>
				</div>
				<div class="eval-record-course">
					<h6>{course}</h6>
				</div>
			</Col>
			<Col>
				<div class="eval-record-date">
					<p>{date}</p>
				</div>
				<div class="eval-record-time">
					<p>{time}</p>
				</div>
				<div class="eval-record-location">
					<p>{location}</p>
				</div>
			</Col>
		</Row>
	);
}

export default EvalRecord;