import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
// change
import { fetchProfile, fetchPassword, fetchPreferences, fetchIntegrations, editIntegration } from "../../../actions/data/settings.action";
import { logout } from "../../../actions/auth/auth.action";
import PropTypes from "prop-types";

import { Container, Col, Row } from "reactstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import Nav from "../../global/Nav";
import Header from "../../global/Header";
import Profile from "../Profile";
import Password from "../Preference";
import Preference from "../Preference";
import Integration from "../Integration";

import "./Settings.scss";

class Settings extends Component {
	state = {
		
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
	};

	componentDidMount() {
		
	};

	componentDidUpdate() {

	};

	handleProfile = () => {
		this.props.fetchProfile();
	};

	handlePassword = () => {
		this.props.fetchPassword();
	};

	handlePreferences = () => {
		this.props.fetchPreferences();
	};

	handleIntegrations = () => {
		this.props.fetchIntegrations();
	};

	handleLogout = () => {

		// logout user
		this.props.logout();
	};

	render() {
		return (
			<Fragment>
				<Helmet>
					<title> My Tutee | Settings</title>
				</Helmet>
				<Nav />
				<div id="settings">
					<Row className="header">
						<Col>
							<Header header="Settings"/> 
						</Col>
						<Col>
							<Button onClick={this.handleLogout}>Sign Out</Button>
						</Col>
					</Row>
					<Row>
						<Col className="settings-nav">
							<Button onClick={this.handleProfile} block>Profile</Button>
							<Button onClick={this.handlePassword} block>Password</Button>	
							<Button onClick={this.handlePreferences} block>Preferences</Button>
							<Button onClick={this.handleIntegrations} block>Integrations</Button>
						</Col>
					</Row>
					<Container>
						<Row className="body settings-body">
							<Col>
								{this.props.form}
							</Col>		
						</Row>
					</Container>
					<Row className="footer settings-footer">
						<Col>
							<Button href="https://facebook.com" target="_blank" className="social"><FontAwesomeIcon icon={faFacebookSquare}/></Button>
							<Button href="https://www.linkedin.com/company/tutee" target="_blank" className="social"><FontAwesomeIcon icon={faLinkedin}/></Button>
							<Button href="https://www.instagram.com/tutee" target="_blank" className="social"><FontAwesomeIcon icon={faInstagram}/></Button>
							<Button href="https://twitter.com/tutee" target="_blank" className="social"><FontAwesomeIcon icon={faTwitterSquare}/></Button>
						</Col>
						<Col>
							<p>Copyright {year} Tutee. All rights reserved. </p>
							<a href="https://tutee.ca/changelog" target="_blank">{version}</a>
						</Col>
					</Row>
				</div>
			</Fragment>
		);
	};
};

const year = new Date().getFullYear();
const version = "Version 1.0.0";

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
});

export default connect(mapStateToProps, { 
		logout, 
		fetchProfile, 
		fetchPassword,
		fetchPreferences, 
		fetchIntegrations, editIntegration
	}
)(Settings);