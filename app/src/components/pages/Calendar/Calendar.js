import React, { Component, Fragment } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import { Col, Row } from "reactstrap";
import { Button } from "react-bootstrap"
import "./Calendar.scss";

export default class Calendar extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		this.setState({
			isLoading: false
		});

		axios.get("http://localhost:3000/calendar/")
		.then(res => {

		})
		.catch(err => {

		});
	}

	componentWillUnmount() {
		
	}

	render() {
	let { isLoading } = this.state;

		return (
			<Fragment>
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
		)
	}
}
