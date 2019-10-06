import React, {Component, Fragment} from "react";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import { Container, Row, Col} from "reactstrap";
import "./Help.scss";

export default class Help extends Component {
	constructor(props) {
		super(props);

		this.state= {
			isLoading: true
		}
	}

	componentDidMount() {
		this.setState({
			isLoading: false
		});
	}

	componentWillUnmount() {
		
	}

	render() {
		let { isLoading } = this.state;
		
		if(isLoading) {
			return null;
		} else {
			return (
				<Fragment>
					<Nav />
					<Container id="help">
						<Row className="header">
							<Col>
								<Header header="Help"/> 
							</Col>
							<Col>
								
							</Col>
						</Row>
						<Row className="body">
							<Col>
							
							</Col>
						</Row>
					</Container>
				</Fragment>
			)
		}
	}
}