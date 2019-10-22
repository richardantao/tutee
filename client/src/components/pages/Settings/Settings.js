import React, { Component, Fragment } from "react";

import { 
	getProfile, getPassword, getPreferences, getIntegrations 
} from "../../../actions/data/settings.action";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container, Col, Row } from "reactstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import Profile from "../../organisms/Profile";
import Password from "../../organisms/Preference";
import Preference from "../../organisms/Preference";
import Integration from "../../organisms/Integration";

import "./Settings.scss";

class Settings extends Component {
	state = {
		form: "profile"
	};

	static propTypes = {

	};

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
				<div id="settings">
					<Row className="header">
						<Col>
							<Header header="Settings"/> 
						</Col>
						<Col>
							<Button href="/signout">Sign Out</Button>
						</Col>
					</Row>
					<Row>
						<Col className="settings-nav">
							<Button href="/settings/profile" block>Profile</Button>
							<Button href="/settings/password" block>Password</Button>	
							<Button href="/settings/preferences" block>Preferences</Button>
							<Button href="/settings/integrations" block>Integrations</Button>
						</Col>
					</Row>
					<Container>
						<Row className="body settings-body">
							<Col>
							
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

});

export default connect(mapStateToProps, { getProfile, getPassword, getPreferences, getIntegrations })(Settings);