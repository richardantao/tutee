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
        
        axios.get("/:UserId/settings/password/:UserPassword/edit")
        .then(res => {
            this.setState({
                password: res.data.UserPassword
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
                <form method="PUT" action="/password/update" >
                    <Row>
                        <Col>
                            <label for="UserPassword">Current Password</label>
                        </Col>
                        <Col>
                            <input name="UserPassword" type="password"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label for=""></label>
                        </Col>
                        <Col>
                            <input name="" type="password"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label for=""></label>
                        </Col>
                        <Col>
                            <input name="" type="password"/>
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