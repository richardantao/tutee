import React, { Component } from "react";
import SelectReact from "../../atoms/Select";
import LoadingColumn from "../LoadingColumn";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Row, Col } from "reactstrap";
import "./Form.scss";

// functionality list
// add onClick functionality to Cancel button to close form and reload page

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
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
			return <LoadingColumn/>;
		} else {
			return(
				<form action={this.props.action} method="POST">
					<Row className="items-new-form-header">
						<h3>New {this.props.header}</h3>
					</Row>
					<Row class="items-new-form-main">
						<Row>
							<Col>
								<label for={this.props.title}>Title</label>
								<InputGroup className="mb-3">
									<InputGroup.Prepend>
									<FormControl 
										aria-label="Default" 
										aria-describedby="inputGroup-sizing-default" 
										type="text" 
										name={this.props.title}
									/>
									</InputGroup.Prepend>
								</InputGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<label for={this.props.course}>Course</label>
								<SelectReact name={this.props.course} placeholder="Select Course.."/>
							</Col>
							<Col>
								<label for={this.props.module}>Module</label>
								<SelectReact name={this.props.module} placeholder="Select Module.."/>                    
							</Col>
						</Row>
						<Row>
							<Col>
								<label for={this.props.type}>Type</label>
								<SelectReact name={this.props.type} placeholder="Select Task Type.."/>
							</Col>
							<Col>
								<label for={this.props.deadline}>Due Date</label>
								<InputGroup className="mb-3">
									<InputGroup.Prepend>
									<FormControl 
										aria-label="Default" 
										aria-describedby="inputGroup-sizing-default" 
										type="date" 
										name={this.props.deadline}
									/>
									</InputGroup.Prepend>
								</InputGroup>
							</Col>
						</Row>
							<Col>
								<Row>
									<label for={this.props.notes}>Notes</label>
									<InputGroup>
										<InputGroup.Prepend>
										<FormControl as="textarea" aria-label="With textarea" name={this.props.notes}/>
										</InputGroup.Prepend>
									</InputGroup>
								</Row>
							</Col>
					</Row>
					<Row className="form-action">
						<Col>
							<Button type="submit">Save</Button>
							<Button href={this.props.page} variant="danger">Cancel</Button>
						</Col>
					</Row>
				</form>
			)
		}	
	}
}

const input = {
	borderLeftRadius: "2rem"
};

