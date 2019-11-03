import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { fetchClasses, editClass } from "../../../actions/data/classes.action";
import PropTypes from "prop-types";

import { Button, Col, Row } from "react-bootstrap";
// import {  } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../global/Nav";
import CalendarHeader from "../CalendarHeader";
import CalendarMonth from "../CalendarMonth";
import CalendarWeek from "../CalendarWeek";
import CalendarDay from "../CalendarDay";
import CalendarAgenda from "../CalendarAgenda";
import ClassEditModal from "../../classes/ClassEditModal";
import ClassNewModal from "../../classes/ClassNewModal";

import "./Calendar.scss";

class Calendar extends Component {
	state = {
		display: "week",
		classes: [],
		editModal: false,
		newModal: false
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		fetchClasses: PropTypes.func.isRequired,
		editClass: PropTypes.func.isRequired
	};

	componentDidMount() {

	};

	componentDidUpdate(prevProps) {
		const { error, isAuthenticated } = this.props;

		if(error) {
			if(!isAuthenticated) {
				this.setState({

				});
			} else {
				this.setState({

				});
			};
		} else {
			this.setState({

			});
		};
	};

	render() {
		const { display, editModal, newModal } = this.state;

		return (
			<Fragment>
				<Helmet>
					<title>My Tutee | Calendar</title>
				</Helmet>
				<Nav />
				<div id="calendar">
					<Row className="header">
						<CalendarHeader/> 
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
						{ display === "month" ? (
							<CalendarMonth/>
						): null }
						{ display === "week" ? (
							<CalendarWeek/>
						): null }
						{ display === "day" ? (
							<CalendarDay/>
						): null }
						{ display === "agenda" ? (
							<CalendarAgenda/>
						): null }
					</Row>

					{ editModal ? (
						<ClassEditModal className="modal"/>
					): null }
					{ newModal ? (
						<ClassNewModal className="modal"/>
					): null}

				</div>
			</Fragment>
		);
	};
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
});

export default connect(mapStateToProps, { fetchClasses, editClass })(Calendar);