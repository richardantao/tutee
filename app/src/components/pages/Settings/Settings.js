import React, { Component, Fragment } from "react";
import axios from "axios";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import { Container, Row, Col} from "reactstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import "./Settings.scss";

export default class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			preferences: []
		};
	}

	componentDidMount() {
		axios.get("/settings")
		.then(res => {
			this.setState({
				isLoading: false,
				preferences: null // change to inherit res
			});
		})
		.catch(err => {
			throw err;
		})
	}
	
	render() {
		return (
			<Fragment>
				<Nav />
				<Container id="settings">
					<Row className="header">
						<Col>
							<Header header="Settings"/> 
						</Col>
						<Col>
							<Button href="/signout">Sign Out</Button>
						</Col>
					</Row> <hr/>
					<Row>
						<Col>
							<Button href="/settings/profile" block>Profile</Button>
							<Button href="/settings/password" block>Password</Button>
							<Button href="/settings/preferences" block>Preferences</Button>
							<Button href="/settings/integrations" block>Integrations</Button>
						</Col>
						<Col>
				
						</Col>
					</Row> <hr/>
					<Row>
						<Col>
							<Button href="https://facebook.com" target="_blank" className="social"><FontAwesomeIcon icon={faFacebookSquare}/></Button>
							<Button href="https://www.linkedin.com/company/tutee" target="_blank" className="social"><FontAwesomeIcon icon={faLinkedin}/></Button>
							<Button href="https://www.instagram.com/tutee" target="_blank" className="social"><FontAwesomeIcon icon={faInstagram}/></Button>
							<Button href="https://twitter.com/tutee" target="_blank" className="social"><FontAwesomeIcon icon={faTwitterSquare}/></Button>
						</Col>
						<Col>
							<p>Copyright {year} Tutee. All rights reserved. </p>
							<p>Version 1.0.0</p>
						</Col>
					</Row>
				</Container>
			</Fragment>
		)
	}
}

// display year for copyright
const year = new Date().getFullYear();