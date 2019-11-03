import React, { Component } from "react";

import { connect } from "react-redux";
import { updatePassword } from "../../../actions/data/settings.action";
import PropTypes from "prop-types";

import { Col, Row } from "react-bootstrap";
import ButtonReact from "../../atoms/Button";

import "./Password.scss";

class Password extends Component {
    state = {
        current: "",
        new: "",
        confirm: ""
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    };

    componentDidMount() {

    };

    handleChange = e => {
        
    };
    
    handleSubmit = e => {
        e.preventDefault();
        
        this.props
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
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
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { updatePassword })(Password);