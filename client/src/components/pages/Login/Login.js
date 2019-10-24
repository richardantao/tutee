import React, { Component } from "react";

import { login } from "../../../actions/auth/auth.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container } from "reactstrap";
import LoginModal from "../../molecules/LoginModal";

import "./Login.scss";

class Login extends Component {
    state = {

    };

    static propTypes = {

    };
    
    render() {
       return(
            <div>
                <LoginModal/>
            </div> 
       )
    };
};

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps, { login, clearErrors })(Login);