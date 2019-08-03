import React from "react";
import styles from"./Header.css";

// component 
const Header = (props) => {
	return(
		<React.Fragment>
			<h1>{props.header}</h1>
		</React.Fragment>
	)
}

export default Header;