import React, { Component } from "react";

import { connect } from "react-redux";
import { } from "../../../actions/data/evaluations.action";
import PropTypes from "prop-types";

import "./EvalNewModal.scss";

class EvalNewModal extends Component {
    state = {
        open: false
    };
    
    static propTypes = {
        isAuthenticated: PropTypes.func,
        error: PropTypes.object.isRequired
    };

    render() {
        return (
            null
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, {

})
(EvalNewModal);


