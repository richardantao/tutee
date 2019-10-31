import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { returnErrors, clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

// import LoadingColumn from "../../molecules/LoadingColumn";
import "./Errors.scss";

class Errors extends Component {
    state = {

    };

    static propTypes = {

    };
    
    componentDidMount() {
    
    };

    render() {
        return (
            <Fragment>
                <Helmet>
					<title>My Tutee | Error</title>
				</Helmet>
            </Fragment>
        );
    };
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(Errors);