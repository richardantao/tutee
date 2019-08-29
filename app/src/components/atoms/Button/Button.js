import React from "react";
import { Button } from "react-bootstrap";
import "./Button.scss";

const ButtonReact = (props) => (
	<Button>{props.icon}{props.name}</Button>
)

export default ButtonReact;
