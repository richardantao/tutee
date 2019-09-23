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
							<Header header="Help"/> 
						</Row>
						<Row className="body">
				
						</Row>
					</Container>
				</Fragment>
			)
		}
	}
}