import React, { useEffect, useState } from "react";

import GalleryCard from "../components/GalleryCard";
function Rincones() {
	const [talleres, setTalleres] = useState([]);
	const [myFavoritesFiltered, setMyFavoritesFiltered] = useState(null);
	const [buttonFavorite, setbuttonFavorite] = useState(false);
	const [message, setMessage] = useState(false);
	const [loading, setLoading] = useState(false);

	const apiTaller = "https://api.mocklets.com/mock68016/rincones";

	useEffect(() => {
		async function getTalleres() {
			try {
				setLoading(true);
				const response = await fetch(apiTaller);
				const data = await response.json();

				setTalleres(data);
				setLoading(false);
			} catch (e) {
				console.log(e);
			}
		}

		getTalleres();
	}, []);

	const getFavorites = () => {
		const favoritesCards = JSON.parse(
			localStorage.getItem("Rincones-favorites")
		);

		if (favoritesCards === null) {
			setMessage(true);
		} else {
			if (favoritesCards) {
				const sectionFavoriteFromLocalStorage = {
					resources: favoritesCards,
					sectionName: "Rincones Favoritos",
				};

				setMyFavoritesFiltered(sectionFavoriteFromLocalStorage);
				setMessage(false);
			}
		}
		setbuttonFavorite(!buttonFavorite);
	};

	return (
		<section id="rincones">
			<div className="section-header">
				<h1>Rincones</h1>
				<button onClick={() => getFavorites()}>
					{buttonFavorite === false ? "Ver favoritos" : "Volver"}
				</button>
			</div>
			{loading && (
				<div className="loading">
					<div class="lds-dual-ring"></div>
				</div>
			)}
			{myFavoritesFiltered && buttonFavorite === true && (
				<GalleryCard section={myFavoritesFiltered} />
			)}

			{buttonFavorite === false &&
				talleres.map((section, index) => {
					return <GalleryCard key={index} section={section} />;
				})}
		</section>
	);
}

export default Rincones;
