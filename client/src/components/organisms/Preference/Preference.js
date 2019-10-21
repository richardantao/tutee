import React, { Component } from "react";

import { connect } from "react-redux";


import { Col, Row } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";

import "./Preference.scss";

class Preference extends Component {
    state = {

    }

    componentDidMount() {

    }
    
    componentWillUnmount() {
        
    }

    render() {
        return(
            <form method="PUT" action="/">
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
            </form>
        )
    }
}

const mapStateToProps = state => {
    
}

export default connect(mapStateToProps, { })(Preference);
