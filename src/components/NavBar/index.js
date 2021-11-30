import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
function NavBar() {
	return (
		<nav className="navbar">
			<NavLink exact to="/">
				Talleres
			</NavLink>
			<NavLink to="/rincones">Rincones</NavLink>
		</nav>
	);
}

export default NavBar;
