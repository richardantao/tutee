import React from "react";
import {Row, Col} from "react-bootstrap";

const TaskRecord = ({ title, course, type, deadline }) => {
	return (
		<Row class="task-record">
			<Col>
				<div class="task-record-title">
					<h5>{title}</h5>
				</div>
				<div class="task-record-course">
					<h6>{course}</h6>
				</div>
			</Col>
			<Col>
				<div class="task-record-type">
					<p>{type}</p>
				</div>
				<div class="task-record-deadline">
					<p>{deadline}</p>
				</div>
			</Col>
		</Row>
	)
}

export default TaskRecord;