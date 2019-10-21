import React, { Component } from "react";

import {  } from "../../../actions";
import { connect } from "react-redux";

import { Col, Row } from "react-bootstrap";
import ButtonReact from "../../atoms/Button";

import "./Password.scss";

class Password extends Component {
    state = {
        
    }

    componentDidMount() {

    }
    
    componentWillUnmount() {

    }

    render() {
        return(
            <form method="PUT" action="/password/update" role="form">
                <Row>
                    <Col>
                        <label for="current">Current Password</label>
                        <input name="current" type="password"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label for="new"></label>
                        <input name="new" type="password"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label for="confirm"></label>
                        <input name="confirm" type="password"/>
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

const mapStateToProps = state => {

}

export default connect(mapStateToProps, {  })(Password);