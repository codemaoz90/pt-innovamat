import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
	return (
		<div className="navbar">
			<Link to="/">Talleres</Link>
			<Link to="/rincones">Rincones</Link>
		</div>
	);
}

export default NavBar;
