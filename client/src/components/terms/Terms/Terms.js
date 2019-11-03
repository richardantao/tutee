import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchTerms, editTerm } from "../../../actions/data/terms.action";
import PropTypes from "prop-types";

import { Col } from "reactstrap";

import "./Terms.scss";

class Terms extends Component {
    state = {
        editModal: false,
        newModal: false,
        terms: []
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        terms: PropTypes.object.isRequired,
        fetchTerms: PropTypes.func.isRequired,
        editTerm: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchTerms();
    };

    render() {
        const { editModal, newModal } = this.state;
        const { terms } = this.props; 

        return (
           <Col id="terms">
           
           </Col>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { fetchTerms, editTerm })(Terms);
