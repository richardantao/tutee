import React from "react";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import { Container, Row, Col} from "reactstrap";
import { Button } from "react-bootstrap"
import styles from "./Calendar.css";

export default function Calendar() {
	return (
		<React.Fragment>
			<Nav />
			<Container id="calendar">
				<Row className="header">
					<Header header="Calendar"/> 
				</Row> <hr/>
				<Row>
					
				</Row>
			</Container>
		</React.Fragment>
	)
}
