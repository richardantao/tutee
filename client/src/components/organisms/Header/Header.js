import React from "react";
import "./Header.scss";

// component 
const Header = (props) => {
	return(
		<React.Fragment>
			<h1>{props.header}</h1>
		</React.Fragment>
	)
}

export default Header;