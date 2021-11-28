import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
function NavBar() {
	return (
		<div className="navbar">
			<NavLink exact to="/">
				Talleres
			</NavLink>
			<NavLink to="/rincones">Rincones</NavLink>
		</div>
	);
}

export default NavBar;
