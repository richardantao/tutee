import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchIntegrations, editIntegration } from "../../../actions/data/settings.action";
import PropTypes from "prop-types";

// import LoadingColumn from "../../molecules/LoadingColumn";
import { Button, Col, Row } from "react-bootstrap";

class Integration extends Component {
    state = {
        open: false,
        integrations: []
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        fetchIntegrations: PropTypes.func.isRequired,
        editIntegration: PropTypes.func.isRequired
    };

    componentDidMount() {
        // get user's integrations
        this.props.fetchIntegrations();
    };

    toggle = () => {

    };

    openEditModal = () => {
        this.setState({
            open: true
        });
    };

    render() {
        const integrationRecords = integrations.map(({ _id}) => {
            <div key={_id}>
            <Button onClick={this.openEditModal}></Button>
            </div>
        });

        return(
            <Row>
                <Col>
                    {integrationRecords}
                </Col>
            </Row>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    integrations: state.integrations
});

export default connect(mapStateToProps, { fetchIntegrations, editIntegration })(Integration);