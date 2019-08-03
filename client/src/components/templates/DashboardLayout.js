import React from "react";
import { Container, Row, Col } from "reactstrap";
import Nav from "../organisms/Nav";
import Header from "../organisms/Header";

// component
export default function DashboardLayout() {
	return (
		<React.Fragment>
			<Nav />
			<Container>
				<Row>
					<Header />
				</Row>
				<Col>Hello</Col>
				<Col>Greetings</Col>
				<Col>This Dick</Col>
			</Container>
		</React.Fragment>
	)
}

