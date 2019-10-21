import React, { Component} from "react";

import { } from "../../../actions/tasks.action";
import { connect } from "react-redux";

import Button from "../../atoms/Button";
import "./TaskModal.scss";

class TaskModal extends Component {
    state = {

    }
    
    componentDidMount() {
        this.setState({
            isLoading: false,
            active: false
        });
    }
    render() {

        return(
            <form method="" action="" className="modal">
                <div className="modal-header">
                    <h3>{this.props.header}</h3>
                </div>
                <div className="modal-body">
                    <div>
                        <label for=""></label>
                        <input type="" name=""/>
                    </div>
                </div>
                <div className="modal-action">
                    <Button onClick="">Cancel</Button>
                    <Button onClick="">{this.props.action}</Button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps, { })(TaskModal);