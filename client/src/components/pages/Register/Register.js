import React, { Component } from "react";

import { connect } from "react-redux";
import { register } from "../../../actions/auth/auth.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import RegisterModal from "../../molecules/RegisterModal";

import "./Register.scss";

class Register extends Component {
    state = {

    };
    
    static propTypes = {

    };

    render() {
        return(
            <RegisterModal/>
        );
    };
};

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps, { register, clearErrors })(Register);