import React, { Component, Fragment } from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Counter from "../../molecules/Counter";
import DateDisplay from "../../atoms/Date";
import "./DashboardHeader.scss";

export default class DashboardHeader extends Component {
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
            return null;
        } else {
            return(
                <Fragment>
                    <Col className="dashboard-header">
                        <h3>Today</h3>
                        <DateDisplay />
                        <Counter type="Classes" count="5"/>	
                    </Col>
                    <Col className="dashboard-header">
                        <h3>Tasks</h3>
                        <Button href="/dashboard/tasks/new" className=""><FontAwesomeIcon icon={faPlus} /> New Task</Button>
                        <Counter type="Tasks" count="3"/>
                    </Col>
                    <Col className="dashboard-header">
                        <h3>Evaluations</h3>
                        <Counter type="Evaluations" count="2"/>
                    </Col>
                </Fragment>
            )
        }
    }
}