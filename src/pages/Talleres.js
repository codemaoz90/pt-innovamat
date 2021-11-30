import React, { useEffect, useState } from "react";
import "../ultils/main.js";
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
			if (favoritesCards) {
				const sectionFavoriteFromLocalStorage = {
					resources: favoritesCards,
					sectionName: "Talleres Favoritos",
				};

				setMyFavoritesFiltered(sectionFavoriteFromLocalStorage);
				setMessage(false);
			}
		}
		setbuttonFavorite(!buttonFavorite);
	};

	const messageInfo = message && <h1>Aún no tenemos favoritos!!</h1>;

	return (
		<section id="talleres">
			<div className="section-header">
				<h1>Talleres</h1>
				<button onClick={() => getFavorites()}>
					{buttonFavorite === false ? "Ver favoritos" : "Volver"}
				</button>
			</div>

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

export default Talleres;
