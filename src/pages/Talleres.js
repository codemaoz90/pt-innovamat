import React, { useEffect, useState } from "react";
import Card from "../components/Card";

import GalleryCard from "../components/GalleryCard";
function Talleres() {
	const [talleres, setTalleres] = useState([]);
	const [myFavoritesFiltered, setMyFavoritesFiltered] = useState(null);
	const [myFavorites, setMyFavorites] = useState(false);
	const [message, setMessage] = useState(false);

	const apiTaller = "https://api.mocklets.com/mock68016/talleres";

	useEffect(() => {
		async function getTalleres() {
			try {
				const response = await fetch(apiTaller);
				const data = await response.json();

				setTalleres(data);
				// console.log(data);
			} catch (e) {
				console.log(e);
			}
		}

		getTalleres();
	}, []);

	const getFavorites = () => {
		const favoritesCards = JSON.parse(localStorage.getItem("favorites"));
		console.log(favoritesCards);
		if (favoritesCards === null) {
			setMessage(true);
		} else {
			setMyFavoritesFiltered(favoritesCards);
		}
		setMyFavorites(!myFavorites);
		setMessage(!message);
	};

	const messageInfo = message && <h1>No tenemos favoritos!!</h1>;
	const favorites =
		myFavoritesFiltered &&
		myFavoritesFiltered.map((favoriteEL) => {
			return <Card resource={favoriteEL} />;
		});
	return (
		<div id="talleres">
			<h1>Talleres</h1>
			<button onClick={() => getFavorites()}>myfavorites</button>

			{messageInfo}
			{myFavorites === true && favorites}
			{myFavorites === false &&
				talleres.map((section, index) => {
					return <GalleryCard key={index} section={section} />;
				})}
		</div>
	);
}

export default Talleres;
