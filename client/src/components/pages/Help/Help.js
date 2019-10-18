import React, { Component, Fragment } from "react";

import { Col, Row } from "reactstrap";

import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import Accordion from "../../molecules/Accordion";

import "./Help.scss";

export default class Help extends Component {
	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	render() {
		return (
			<Fragment>
				<Nav />
				<div id="help">
					<Row className="header">
						<Col>
							<Header header="Help"/> 
						</Col>
						<Col>
							
						</Col>
					</Row>
					<Row className="body">
						<Col>
							<div>
								<h2>Frequently Asked Questions</h2>
								<Accordion/>
							</div>
						</Col>
					</Row>
				</div>
			</Fragment>
		)
	}
}