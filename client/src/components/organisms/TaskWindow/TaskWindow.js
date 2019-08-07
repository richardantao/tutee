import React, { Component } from "react";
import axios from "axios";
import styles from "./TaskWindow.css";

export default class TaskWindow extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            isLoading: true,
            user: [],
            session: []
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

    render() {
        return(
            <div>

            </div>
        )
    }
}