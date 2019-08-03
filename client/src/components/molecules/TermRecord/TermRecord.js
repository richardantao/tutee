import React from "react";
import { Col, Row } from "react-bootstrap";

const TermRecord = ({ title, rotation, start, end }) => {
    return (
        <Row className="term-record">
            <Col>
                <div className="term-record-title">
                    <h5>{title}</h5>
                </div>
                <div className="term-record-rotation">
                    <h6>{rotation}</h6>
                </div>
            </Col>
            <Col>
                <div className="term-record-start">
                    <p>{start}</p>
                </div>
                <div className="term-record-end">
                    <p>{end}</p>
                </div>
            </Col>
        </Row>
    )
}

export default TermRecord;