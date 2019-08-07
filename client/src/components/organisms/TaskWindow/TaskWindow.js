import React, { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import Button from "../../atoms/Button";
import styles from "./TaskWindow.css";

export default class TaskWindow extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            isLoading: true,
            method: [],
            user: [],
            session: [],
            
        }
    }
    
    componentDidMount() {
        this.setState({
            isLoading: false
        });

        axios.get("/dashboard/:userId/tasks/:taskId/edit")
		.then(res => {
            let user = res.data.userId;
            let task = res.data.task;

			this.setState({
                isLoading: false,
                method: "get-edit",
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
        
        axios.get("/dashboard/:userId/tasks/create")
		.then(res => {
            let user = res.data.userId;
            let task = res.data.task;

			this.setState({
                isLoading: false,
                method: "get-create",
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
        
        axios.post("/dashboard/:userId/tasks/create")
		.then(res => {
            
			this.setState({
                isLoading: false,
                method: "post-create"
			});
		})
		.catch(err => {
			this.setState({
				errors: err,
				isLoading: false
			});
		});
    }

    render() {
        let { method } = this.state
        if(method === "get-edit") {
            return (
                <form className="tasks-get-edit">
                    <Row>
                        <Col>
                            <Button type="submit"></Button>
                        </Col>
                        <Col>
                            <Button href="/dashboard/:userId"></Button>
                            <Button type="submit">Save</Button>
                        </Col>
                        </Row>
                </form>
            )
        } else if (method === "get-create") {
            return (
                <form className="tasks-get-create">

                </form>
            )
        } else {
            return (
                <form method="POST" action="/dashboard/:userId/tasks/create" className="tasks-post-create">
                    <Row className="form-details">


                    </Row>
                    <Row className="form-action">
                        <Col>
                            <Button type="submit"></Button>
                        </Col>
                        <Col>
                            <Button href="/dashboard/:userId"></Button>
                            <Button type="submit"></Button>
                        </Col>
                    </Row>
                </form>
            )
        }
    }
}