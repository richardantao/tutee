import React, { Component } from "react";
import axios from "axios";
import styles from "./SessionWindow.css";

export default class SessionWindow extends Component {
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

        axios.get("/dashboard/:userId/classes/:sessionId/edit")
		.then(res => {
            let user = res.data.userId;
            let session = res.data.session;

			this.setState({
                isLoading: false,
                user: user,
				session: session
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