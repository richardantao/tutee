import React, { Component } from "react";

import { connect } from "react-redux";
import { updatePassword } from "../../../actions/data/settings.action";
import PropTypes from "prop-types";

import { Col, Row } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Button from "../../global/Button";

import "./Password.scss";

class Password extends Component {
    state = {
        current: "",
        new: "",
        confirm: ""
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        updatePassword: PropTypes.func.isRequired
    };

    componentDidMount() {

    };

    handleChange = e => {
        
    };
    
    handleSubmit = e => {
        e.preventDefault();
        
        // if the new password is not empty and is equal to the confirmation password
        if(this.state.new !== "" && this.state.new === this.state.confirm) {
            this.props.updatePassword(newPassword);
        };
    };

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
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
                        <Button type="reset">Reset</Button>
                        <Button type="submit">Save</Button>
                    </Col>
                </Row>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { updatePassword })(Password);