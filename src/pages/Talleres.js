import React, { useEffect, useState } from "react";

import GalleryCard from "../components/GalleryCard";
function Talleres() {
	const [talleres, setTalleres] = useState([]);

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

	return (
		<div id="talleres">
			<h1>Talleres</h1>

			{talleres.map((section, index) => {
				return (
					<GalleryCard
						key={index}
						section={section}
						talleres={talleres}
						setTalleres={setTalleres}
					/>
				);
			})}
		</div>
	);
}

export default Talleres;
