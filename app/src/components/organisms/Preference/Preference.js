import React, { Component } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import "./Preference.scss";

export default class Preference extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: true,
            preferences: []
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
        axios.get("https://localhost:3000/settings/preferences/")
        .then(res => {
            this.setState({
                isLoading: false,
                preferences: res.data.UserPreferences
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
        let { isLoading } = this.state;     
        if (isLoading) {
            return <LoadingColumn/>
        } else {
            return(
                <form method="PUT" action="/:UserId/settings/preferences/FILLME">
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                </form>
            )
        }
    }
}
