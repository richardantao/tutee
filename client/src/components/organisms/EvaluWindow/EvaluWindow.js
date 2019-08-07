import React, { Component } from "react";
import axios from "axios";
import Form from "../../molecules/Form";
import LoadingColumn from "../../molecules/LoadingColumn";
import styles from "./EvaluWindow.css";

export default class EvaluWindow extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            isLoading: true,
            user: [],
            evalu: []
        }
    }
    
    getEvaluRecord = () => {
        axios.get("/dashboard/:userId/evalus/:evaluId/edit")
		.then(res => {
            let user = res.data.userId;
            let evalu = res.data.evalu;

			this.setState({
                isLoading: false,
                user: user,
				evalu: evalu
			});
		})
		.catch(err => {
			this.setState({
				errors: err,
				isLoading: false
			});
		});
    }

    updateEvaluRecord = (event) => {
        event.preventDefault();

        var evalu = {

        }

        axios.put("/:userId/evals/:evalId/update")
        .then(res => {
            user = res.data.userId;

            this.setState({
                isLoading: false
            })
        })
        .catch(err => {
            this.setState({
                errors: err,
                isLoading: false
            });
            
        });
    }

    deleteEvaluRecord = () => {

    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
        
        this.getEvaluRecord();
    }

    render() {
        let { isLoading, user, evalu } = this.state;

        if (isLoading) {
            return <LoadingColumn />
        } else {
            return (
                <Form>
                    <Row>
                        <Col>
                        
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="button" onClick={this.deleteEvaluRecord}></Button>
                        </Col>
                        <Col>
                            <Button ></Button>
                            <Button type="submit" onSubmit={this.updateEvaluRecord}></Button>
                        </Col>
                    </Row>
                </Form>
            )
        }
    }
}