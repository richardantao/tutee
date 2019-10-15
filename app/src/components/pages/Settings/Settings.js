import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import { Col, Row } from "reactstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import Profile from "../../organisms/Profile";
import Password from "../../organisms/Preference";
import Preference from "../../organisms/Preference";
import Integration from "../../organisms/Integration";
import LoadingColumn from "../../molecules/LoadingColumn";

import "./Settings.scss";

class Settings extends Component {
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
							<Button href="/settings/profile" onClick={this.showProfile} block>Profile</Button>
							<Button href="/settings/password" onClick={this.showPassword} block>Password</Button>	
							<Button href="/settings/preferences" onClick={this.showPreferences} block>Preferences</Button>
							<Button href="/settings/integrations" onClick={this.showIntegrations} block>Integrations</Button>
						</Col>
					</Row>
					<Row className="body settings-body">
						<Col>
							<Profile/>
						</Col>		
					</Row>
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
		)
	}
}

const year = new Date().getFullYear();
const version = "Version 1.0.0";

export default connect(null, {})(Settings);