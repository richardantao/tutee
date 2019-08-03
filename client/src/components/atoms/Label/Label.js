import React/*, { Component }*/ from "react";

const Label = (props) => {
	return(
		<label 
		for=`{props.for} {props.function}`
		>
		{props.content}
		</label>
	)
}

export default Label;