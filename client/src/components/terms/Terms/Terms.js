import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchTerms, editTerm } from "../../../actions/data/terms.action";
import PropTypes from "prop-types";

import EditModal from "../TermEditModal";
import NewModal from "../TermNewModal";

import { Col, Row } from "reactstrap";

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

    openEditModal = () => {
        this.setState({
            editModal: true
        });
    };

    render() {
        const { editModal, newModal } = this.state;
        const { terms } = this.props; 

        const termRecords = terms.map(({ _id, title, start, end }) => (
            <Row key={_id}>
                <Col>
                    <h5>{title}</h5>
                </Col>
                <Col>
                    <h6>{start}</h6>
                    <h6>{end}</h6>
                </Col>
                <Col>
                    <Button onClick={this.openEditModal}></Button>
                </Col>
            </Row>
        ));

        return (
           <div id="terms">
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>

                { editModal ? (
                    <EditModal className="modal"/>
                ): null }
                { newModal ? (
                    <NewModal className="modal"/>
                ): null }
           </div>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { fetchTerms, editTerm })(Terms);
