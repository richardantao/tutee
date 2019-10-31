import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchIntegrations, editIntegration } from "../../../actions/data/settings.action";
import PropTypes from "prop-types";

import LoadingColumn from "../../molecules/LoadingColumn";
import { Col, Row } from "react-bootstrap";
import {
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

class Integration extends Component {
    state = {

    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired
    };

    componentDidMount() {
        
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props;
    };

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { fetchIntegrations })(Integration);