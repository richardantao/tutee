import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import ButtonReact from "../../atoms/Button";
import "./Password.scss";

export default class Password extends Component {
    constructor(props) {
        super(props)
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
                            <input name="UserPassword" type=""/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label></label>
                        </Col>
                        <Col>
                        <input/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label></label>
                        </Col>
                        <Col>
                            <input/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ButtonReact>Reset</ButtonReact>
                            <ButtonReact>Save</ButtonReact>
                        </Col>
                    </Row>
                </form>
            )
        }
    }
}