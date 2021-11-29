import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./style.css";

// I clean my localStorage when i reload! similar to sessions.
window.onload = window.localStorage.clear();

const Heart = (props) => {
	const [fav, setFav] = useState(false);

	const hearClasess = classNames({
		heart: true,
		animate: fav,
	});

	const spanClasses = classNames({
		red: fav,
	});

	// Method for saving data in the localStorage API!

	const addFavorites = () => {
		const resource = { ...props.resource, fav: true };

		if (
			JSON.parse(localStorage.getItem("favorites")) === null ||
			JSON.parse(localStorage.getItem("favorites")).length === 0
		) {
			// add to an array!
			localStorage.setItem("favorites", JSON.stringify([resource]));
			setFav(!fav);
		} else {
			const localStorageFavorites = JSON.parse(
				localStorage.getItem("favorites")
			);

			const resourceConcat = [...localStorageFavorites, resource];
			localStorage.setItem("favorites", JSON.stringify(resourceConcat));
			setFav(!fav);
		}
	};

	const removeFavorite = (id) => {
		console.log(JSON.parse(localStorage.getItem("favorites")), id);
		const resourceDeletedFromLocalStorage = JSON.parse(
			localStorage.getItem("favorites")
		);
		const resourceFiltered = resourceDeletedFromLocalStorage.filter(
			(el) => el.id !== id
		);
		localStorage.setItem("favorites", JSON.stringify(resourceFiltered));
		setFav(!fav);
	};

	const removeAddFavorites = () => {
		if (fav) {
			removeFavorite(props.resource.id);
		} else {
			addFavorites();
		}
	};
	return (
		<>
			<div className="heart-container">
				<div
					onClick={() => removeAddFavorites()}
					className={hearClasess}
				></div>
				<span className={spanClasses}>Favorito</span>
			</div>
			<pre>{props.resource.id}</pre>
		</>
	);
};

export default Heart;
