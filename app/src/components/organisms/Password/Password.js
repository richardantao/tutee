import React, { Component } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import ButtonReact from "../../atoms/Button";
import "./Password.scss";

export default class Password extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            password: []
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
        
        axios.get("https://localhost:3000/settings/password/")
        .then(res => {
            this.setState({
                isLoading: false,
                password: res.data.password
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
        let { isLoading } = this.state;

        if (isLoading) {
            return LoadingColumn;
        } else {    
            return(
                <form method="PUT" action="/password/update" role="form">
                    <Row>
                        <Col>
                            <label for="currentPassword">Current Password</label>
                        </Col>
                        <Col>
                            <input name="currentPassword" type="password"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label for="newPassword"></label>
                        </Col>
                        <Col>
                            <input name="newPassword" type="password"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label for="confirmPassword"></label>
                        </Col>
                        <Col>
                            <input name="confirmPassword" type="password"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ButtonReact type="reset">Reset</ButtonReact>
                            <ButtonReact type="submit">Save</ButtonReact>
                        </Col>
                    </Row>
                </form>
            )
        }
    }
}