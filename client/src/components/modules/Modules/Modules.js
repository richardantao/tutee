import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchModules } from "../../../actions/data/modules.action"
import PropTypes from "prop-types";

import { Button, Col, Row } from "reactstrap";

import "./Modules.scss";

class Modules extends Component {
    state = {
        // add module attributes
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        fetchModules: PropTypes.func.isRequired
    };

    componentDidMount() {

        this.props.fetchModules();
    };

    componentDidUpdate() {
        const { error, isAuthenticated } = this.props;

        if(error) {
            if(!isAuthenticated) {
                this.setState({

                });
            } else {
                this.setState({

                });
            };
        } else {
            this.setState({

            });
        };
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
                    <Button onClick={this}></Button>
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
    error: state.error
});

export default connect(mapStateToProps, { fetchModules })(Modules);