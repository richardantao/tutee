import React, { Component } from "react";
import axios from "axios";
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
    
    componentDidMount() {
        this.setState({
            isLoading: false
        });

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

    render() {
        return(
            <div>

            </div>
        )
    }
}