import React, { useEffect, useState } from "react";
import Card from "../components/Card";

import GalleryCard from "../components/GalleryCard";
function Talleres() {
	const [talleres, setTalleres] = useState([]);
	const [myFavoritesFiltered, setMyFavoritesFiltered] = useState(null);
	const [buttonFavorite, setbuttonFavorite] = useState(false);
	const [message, setMessage] = useState(false);

	const apiTaller = "https://api.mocklets.com/mock68016/talleres";

	useEffect(() => {
		async function getTalleres() {
			try {
				const response = await fetch(apiTaller);
				const data = await response.json();

				setTalleres(data);
			} catch (e) {
				console.log(e);
			}
		}

		getTalleres();
	}, []);

	const getFavorites = () => {
		const favoritesCards = JSON.parse(
			localStorage.getItem("Talleres-favorites")
		);

		if (favoritesCards === null) {
			setMessage(true);
		} else {
			const sectionFavoriteFromLocalStorage = {
				resources: favoritesCards,
				sectionName: "Talleres Favoritos",
			};

			setMyFavoritesFiltered(sectionFavoriteFromLocalStorage);
			setMessage(false);
		}
		setbuttonFavorite(!buttonFavorite);
	};

	const messageInfo = message && <h1>No tenemos favoritos!!</h1>;

	return (
		<div id="talleres">
			<h1>Talleres</h1>
			<button onClick={() => getFavorites()}>myfavorites</button>

			{messageInfo}

			{buttonFavorite === true && (
				<GalleryCard section={myFavoritesFiltered} />
			)}

			{buttonFavorite === false &&
				talleres.map((section, index) => {
					return <GalleryCard key={index} section={section} />;
				})}
		</div>
	);
}

export default Talleres;
