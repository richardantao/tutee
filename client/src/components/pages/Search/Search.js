import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
// import { }
import PropTypes from "prop-types";


import { Col, Row } from "reactstrap";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import SelectReact from "../../atoms/Select";

import "./Search.scss";

export default class Search extends Component {
	state = {

	}

	static propTypes = {

	}

	componentDidMount() {
		
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {
		
	}

	render() {
		return (
			<Fragment>
				<Nav />
				<div id="search">
					<Row className="header">
						<Col>
							<Header header="Search"/>
						</Col>
						<Col>
						
						</Col>
					</Row>
					<Row className="body">
						<Col>
							<InputGroup className="mb-3">
								<FormControl
								placeholder="Search for item.."
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
								/>
								<InputGroup.Append>
								<InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
						</Col>
						<Col>
							<SelectReact placeholder="Filter by Course.."/>
						</Col>
						<Col>
							<SelectReact placeholder="Filter by Type.."/>
						</Col>
					</Row>
					<Row className="footer">
						<Col>
						
						</Col>
					</Row>
				</div>
			</Fragment>
		);
	};
};

