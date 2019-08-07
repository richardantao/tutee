import React, { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import Form from "../../molecules/Form";
import LoadingColumn from "../../molecules/LoadingColumn";
import Button from "../../atoms/Button";
import styles from "./TaskWindow.css";

export default class TaskWindow extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            isLoading: true,
            url: [],
            user: [],
            session: [],
            
        }
    }
    
    getTaskRecord = () => {
        axios.get("/dashboard/:userId/tasks/:taskId/edit")
		.then(res => {
            let user = res.data.userId;
            let task = res.data.task;

			this.setState({
                isLoading: false,
                url: "/dashboard/:userId/tasks/:taskId/edit",
                user: user,
				task: task
			});
		})
		.catch(err => {
			this.setState({
				errors: err,
				isLoading: false
			});
        });
    }

    getTaskForm = () => {
        axios.get("/dashboard/:userId/tasks/create")
		.then(res => {
            let user = res.data.userId;
            let task = res.data.task;

			this.setState({
                isLoading: false,
                url: "/dashboard/:userId/tasks/create",
                user: user,
				task: task
			});
		})
		.catch(err => {
			this.setState({
				errors: err,
				isLoading: false
			});
        });
    }

    createTaskRecord = () => {
        axios.post("/dashboard/:userId/tasks/create")
		.then(res => {
            
			this.setState({
                isLoading: false,
                url: "/dashboard/:userId/tasks/create"
			});
		})
		.catch(err => {
			this.setState({
				errors: err,
				isLoading: false
			});
		});
    }

    updateTaskRecord = (event) => {
        event.preventDefault();


    }

    deleteTaskRecord = () => {

    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });

        this.getTaskRecord();
        this.getTaskForm();
        this.createTaskRecord();
        this.updateTaskRecord();
        this.deleteTaskRecord();
    }

    render() {
        let { isLoading, url, user, task } = this.state;

        if (isLoading) {
            return <LoadingColumn />
        } else if(!isLoading && url === "/dashboard/:userId/tasks/:taskId/edit") {
            return (
                <Form method="PUT" action="/dashboard/:userId/evals/:evalId/update" className="tasks-window-edit">
                    <Row>
                        <Col>
                            <Button type="button" onClick={this.deleteTaskRecord}>Delete</Button> // delete
                        </Col>
                        <Col>
                            <Button href="/dashboard/:userId">Cancel</Button>
                            <Button type="submit">Save</Button>
                        </Col>
                        </Row>
                </Form>
            )
        } else {
            return (
                <Form method="POST" action="/dashboard/:userId/tasks/create" className="tasks-window-create">
                    <Row className="form-details">
                        <Col>
                        
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>
                    <Row className="form-action">
                        <Col>
                            <Button href="/dashboard/:userId">Cancel</Button>
                            <Button type="submit">Save</Button>
                        </Col>
                    </Row>
                </Form>
            )
        }
    }
}