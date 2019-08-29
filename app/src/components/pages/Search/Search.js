import React from "react";
import { Container, Row, Col} from "reactstrap";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import SelectReact from "../../atoms/Select";
import "./Search.scss";


export default function Search() {
	return (
		<React.Fragment>
			<Nav />
			<Container id="search">
				<Row className="header">
					<Header header="Search"/> 
				</Row> <hr/>
				<Row>
					<Col>
						  <InputGroup className="mb-3">
							<FormControl
							  placeholder="Search for item.."
							  aria-label="Recipient's username"
							  aria-describedby="basic-addon2"
							/>
							<InputGroup.Append>
							  <InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
							</InputGroup.Append>
						  </InputGroup>
					</Col>
					<Col>
						<SelectReact placeholder="Filter by Course.."/>
					</Col>
					<Col>
						<SelectReact placeholder="Filter by Type.."/>
					</Col>
				</Row> <hr/>
				<Row>
				
				</Row>
			</Container>
		</React.Fragment>
	)
}

