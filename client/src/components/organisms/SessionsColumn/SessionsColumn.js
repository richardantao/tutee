import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import Empty from "../../molecules/Empty";
import SessionRecord from "../../molecules/SessionRecord";
import styles from "./SessionsColumn.scss";



export default class SessionColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			sessions: []
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: false
		});

		axios.get("/dashboard")
		.then(res => {
				this.setState({ 
					isLoading: false,
					sessions: res.data.sessions
				});
			})
			.catch(err => {
				this.setState({
					errors: err,
					isLoading: false
				})
			});
	}
	
	render() {
		let { isLoading, sessions } = this.state;
	
		if (isLoading) {
			return <LoadingColumn/>
		} else if (!isLoading && sessions && sessions.length > 0) {
			sessions.map(
				(session) =>  {	
					let { id, title, course, time, location } = session;
					return (
						<SessionRecord 
							key={id}
							module={title} 
							course={course} 
							time={time}
							location={location}
						/>
					)
				}
			)
		} else {
			return <Empty/>
		}
	}
}