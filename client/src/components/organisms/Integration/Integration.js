import React, { Component } from "react";

import {  } from "../../../actions";
import { connect } from "react-redux";

import LoadingColumn from "../../molecules/LoadingColumn";
import { Col, Row } from "react-bootstrap";

class Integration extends Component {
    state = {

    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    render() {
        return(
            <form method="PUT" action="/settings/integrations/:id">
                <Row>
                    <Col>
                    
                    </Col>    
                </Row>>
            </form>
        )
    }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps, { })(Integration);