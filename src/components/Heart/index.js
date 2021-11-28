import React, { useState } from "react";
import classNames from "classnames";
import "./style.css";

const Heart = (props) => {
	const [fav, setFav] = useState(false);

	const hearClasess = classNames({
		heart: true,
		animate: fav,
	});

	const spanClasses = classNames({
		red: fav,
	});
	return (
		<>
			<div className="heart-container">
				<div onClick={() => setFav(!fav)} className={hearClasess}></div>
				<span className={spanClasses}>Favorito</span>
			</div>
		</>
	);
};

export default Heart;
