import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { 
	fetchEvaluations, editEvaluation, createEvaluation, updateEvaluation, deleteEvaluation 
} from "../../../actions/data/evaluations.action";
import PropTypes from "prop-types";

import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import SelectReact from "../../atoms/Select";
import { Button } from "react-bootstrap";

import "./Evaluations.scss";

class Evaluations extends Component{
	state = {

	};

	static propTypes = {

	};

	componentDidMount() {
	
	};

	componentDidUpdate() {

	};

	componentWillUnmount() {
		
	};

	render() {
		return (
			<Fragment>
				<Helmet>
					<title>My Tutee | Evaluations</title>
				</Helmet>
				<Nav />
				<div id="evaluations">
					<Row className="header">
						<Col>
							<Header 
								header="Evaluations"
							/> 
						</Col>
						<Col>
							<Button href="/evaluations/new"><FontAwesomeIcon icon={faPlus} /> New Evaluation</Button>
						</Col>
					</Row>
					<Row className="body evals-body">
						<Col>
							<SelectReact placeholder="Filter by Course.."/>
						</Col>
						<Col>
							<Button href="/evaluations" className="current">Current</Button>
							<Button href="/evaluations/past" className="past">Past</Button>
						</Col>	
					</Row>
				</div>
			</Fragment>
		);	
	};
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { fetchEvaluations, editEvaluation, createEvaluation, updateEvaluation, deleteEvaluation })(Evaluations);