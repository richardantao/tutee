import React from "react";
import SelectReact from "../../atoms/Select";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Row, Col } from "reactstrap";
import styles from "./Form.scss";

// functionality list

// use props for name and for
// add onClick functionality to Cancel button to close form and reload page

const Form = (props) => {
	return(
		<form action={props.action} method="POST">
            <Row className="items-new-form-header">
                <h3>New {props.header}</h3>
            </Row>
            <Row class="items-new-form-main">
				<Row>
					<Col>
						<label for={props.title}>Title</label>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
							<FormControl 
								aria-label="Default" 
								aria-describedby="inputGroup-sizing-default" 
								type="text" 
								name={props.title}
							/>
							</InputGroup.Prepend>
						</InputGroup>
					</Col>
				</Row>
				<Row>
               		<Col>
                   		<label for={props.course}>Course</label>
                   		<SelectReact name={props.course} placeholder="Select Course.."/>
               		</Col>
               		<Col>
                   		<label for={props.module}>Module</label>
                   		<SelectReact name={props.module} placeholder="Select Module.."/>                    
               		</Col>
				</Row>
				<Row>
               		<Col>
						<label for={props.type}>Type</label>
                   		<SelectReact name={props.type} placeholder="Select Task Type.."/>
               		</Col>
               		<Col>
						<label for={props.deadline}>Due Date</label>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
							<FormControl 
								aria-label="Default" 
								aria-describedby="inputGroup-sizing-default" 
								type="date" 
								name={props.deadline}
							/>
							</InputGroup.Prepend>
						</InputGroup>
               		</Col>
				</Row>
               		<Col>
						<Row>
							<label for={props.notes}>Notes</label>
							<InputGroup>
								<InputGroup.Prepend>
								<FormControl as="textarea" aria-label="With textarea" name={props.notes}/>
								</InputGroup.Prepend>
							</InputGroup>
						</Row>
					</Col>
       		</Row>
            <Row className="form-action">
				<Col>
					<Button type="submit">Save</Button>
					<Button href={props.page} variant="danger">Cancel</Button>
				</Col>
            </Row>
        </form>
	)
}

const input = {
	borderLeftRadius: "2rem"
};

export default Form;