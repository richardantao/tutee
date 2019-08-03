import React from "react";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import { Container, Row, Col} from "reactstrap";
import styles from "./Help.css";

export default function Help() {
	return (
		<React.Fragment>
			<Nav />
			<Container id="help">
				<Row className="header">
					<Header header="Help"/> 
				</Row> <hr/>
				<Row>
		
				</Row>
			</Container>
		</React.Fragment>
	)
}