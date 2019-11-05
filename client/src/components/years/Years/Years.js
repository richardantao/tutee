import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchYears } from "../../../actions/data/years.action";
import PropTypes from "prop-types";

import "./Years.scss";

class Years extends Component {
    state = {
        years: []
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        years: PropTypes.object.isRequired,
        fetchYears: PropTypes.func.isRequired
    };

    componentDidMount() {

        this.props.fetchYears();
    };

    componentDidUpdate(prevProps) {
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

const mapDispatchToProps = { fetchYears };

export default connect(mapStateToProps, mapDispatchToProps)(Years);