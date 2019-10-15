import React, { Component } from "react";
import axios from "axios";
import LoadingColumn from "../../molecules/LoadingColumn";
import { Col, Row } from "react-bootstrap";

export default class Integration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            integrations: []
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
        axios.get("http://localhost:3000/settings/integrations/")
        .then(res => {
            this.setState({
                isLoading: false,
                integrations: res.data.integrations
            });
        })
        .catch(err => {
            this.setState({
                errors: err,
                isLoading: false
            });
        });
    }

    componentWillUnmount() {
        
    }

    render() {
        let { isLoading, integrations } = this.state;
        if(isLoading) {
            return <LoadingColumn/>;
        } else {
            return(
                <form method="PUT" action="">
                    <Row>
                        <Col>
                        
                        </Col>    
                    </Row>>
                </form>
            )
        }
    }
}