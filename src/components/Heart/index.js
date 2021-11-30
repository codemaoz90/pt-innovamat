import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./style.css";

// I clean my localStorage when i reload! similar to sessions.
// window.onload = window.localStorage.clear();

const Heart = (props) => {
	const [fav, setFav] = useState(false);

	const hearClasess = classNames({
		heart: true,
		animate: fav,
	});

	const spanClasses = classNames({
		red: fav,
	});

	useEffect(() => {
		function geFavoriteFromLocalStorage() {
			const favoritesinLocalStorage = JSON.parse(
				localStorage.getItem(`${props.resource.tag}-favorites`)
			);
			if (favoritesinLocalStorage) {
				const status = favoritesinLocalStorage.some(
					(fav) => fav.title === props.resource.title
				);
				if (status) setFav(true);
				console.log(status);
			}
		}

		geFavoriteFromLocalStorage();
	}, []);

	// Method for saving data in the localStorage API!

	const addFavorites = () => {
		const resource = { ...props.resource, fav: true };

		// Add a single resource to get status!

		if (
			JSON.parse(
				localStorage.getItem(`${props.resource.tag}-favorites`)
			) === null ||
			JSON.parse(localStorage.getItem(`${props.resource.tag}-favorites`))
				.length === 0
		) {
			// add to an array!
			localStorage.setItem(
				`${props.resource.tag}-favorites`,
				JSON.stringify([resource])
			);
			setFav(!fav);
		} else {
			const localStorageFavorites = JSON.parse(
				localStorage.getItem(`${props.resource.tag}-favorites`)
			);

			// Verify duplicate resource!
			if (
				localStorageFavorites.some(
					(fav) => fav.title === resource.title
				)
			)
				return;
			const resourceConcat = [...localStorageFavorites, resource];
			localStorage.setItem(
				`${props.resource.tag}-favorites`,
				JSON.stringify(resourceConcat)
			);
			setFav(!fav);
		}
	};

	const removeFavorite = (id) => {
		console.log(
			JSON.parse(localStorage.getItem(`${props.resource.tag}-favorites`)),
			id
		);
		const resourceDeletedFromLocalStorage = JSON.parse(
			localStorage.getItem(`${props.resource.tag}-favorites`)
		);
		const resourceFiltered = resourceDeletedFromLocalStorage.filter(
			(el) => el.id !== id
		);
		localStorage.setItem(
			`${props.resource.tag}-favorites`,
			JSON.stringify(resourceFiltered)
		);
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
