import React, { Component, Fragment } from "react";
import axios from "axios";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import LoadingColumn from "../../molecules/LoadingColumn";
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
		axios.get("http://localhost:3000/settings/")
		.then(res => {
			this.setState({
				isLoading: false,
				preferences: res.data
			});
		})
		.catch(err => {
			this.setState({
				isLoading: false,
				error: err
			});
		})
	}
	
	render() {
		let { isLoading } = this.state;
		
		if(isLoading) {
			return <LoadingColumn/>;
		} else {
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
						</Row>
						<Row>
							<Col className="settings-nav">
								<Button href="/settings/profile" block>Profile</Button>
								<Button href="/settings/password" block>Password</Button>	
								<Button href="/settings/preferences" block>Preferences</Button>
								<Button href="/settings/integrations" block>Integrations</Button>
							</Col>
						</Row>
						<Row className="body settings-body">
							<Col>
								
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
					</Container>
				</Fragment>
			)
		}	
	}
}

const year = new Date().getFullYear();
const version = "Version 1.0.0";