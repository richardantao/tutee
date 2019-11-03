import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchYears, editYear } from "../../../actions/data/years.action";
import PropTypes from "prop-types";

import "./Years.scss";

class Years extends Component {
    state = {
        editModal: false,
        newModal: false,
        years: []
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        years: PropTypes.object.isRequired
    };

    componentDidMount() {

        this.props.fetchYears();
    };

    componentDidUpdate(prevProps) {

    };

    openEditModal = () => {
        this.setState({
            editModal: true
        });
    };  

    openNewModal = () => {
        this.setState({
            newModal: true
        });
    }; 


    render() {
        const { years } = this.props;

        const yearRecords = years.map(({_id, title}) => (
            <div key={_id} onClick={this.openEditModal}></div>
        ));

        return (
            {yearRecords}
        ); 
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    years: state.years
});

export default connect(mapStateToProps, { fetchYears, editYear })(Years);