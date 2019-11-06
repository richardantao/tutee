import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchModules, editModule } from "../../../actions/data/modules.action"
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "reactstrap";

import "./Modules.scss";

class Modules extends Component {
    state = {
        // add module attributes
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        module: PropTypes.object.isRequired,
        fetchModules: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchModules();
    };

    render() {
        const { modules } = this.state;

        const moduleRecords = modules.map(({ _id }) => (
            <Row key={_id}>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                <Col>
                    <Button onClick={this}><FontAwesomeIcon icon={faEdit}/></Button>
                </Col>
            </Row>
        ));

        return (
            <Col>
                {moduleRecords}
            </Col>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    module: state.module
});

const mapDispatchToProps = { fetchModules, editModule };

export default connect(mapStateToProps, mapDispatchToProps)(Modules);