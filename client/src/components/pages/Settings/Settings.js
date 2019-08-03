import React from "react";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import { Container, Row, Col} from "reactstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import styles from "./Settings.css";

export default function Settings() {
	return (
		<React.Fragment>
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
						<p>Copyright {year} Alpha Innovation. All rights reserved. </p>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}

// display year for copyright
const year = new Date().getFullYear();