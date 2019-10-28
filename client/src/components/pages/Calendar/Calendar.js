import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { } from "../../../actions/data/classes.action";
import { connect } from "react-redux";
import Proptypes from "prop-types";

import { Col, Row } from "reactstrap";
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";

import "./Calendar.scss";

class Calendar extends Component {
	state = {

	};

	static propTypes = {
		
	};

	componentDidMount() {
		
	};

	componentWillUnmount() {
		
	};

	render() {
		return (
			<Fragment>
				<Helmet>
					<title>My Tutee | Calendar</title>
				</Helmet>
				<Nav />
				<div id="calendar">
					<Row className="header">
						<Col>
							<Header header="Calendar"/> 
						</Col>
						<Col className="header-date">
							<Button onClick="">
								<FontAwesomeIcon icon={faChevronLeft}/>
							</Button>
							<h4>{this.props.date}</h4>
							<Button onClick="">
								<FontAwesomeIcon icon={faChevronRight}/>
							</Button>
						</Col>
						<Col className="calendar-selector">
							<Button>{this.props.display}</Button>
						</Col>
					</Row>
					<Row className="body">
						<Col>
						
						</Col>
					</Row>
				</div>
			</Fragment>
		);
	};
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { })(Calendar);