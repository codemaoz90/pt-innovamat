import React, { useState } from "react";
import Card from "../Card";
function GalleryCard(props) {
	const [talleres] = useState(props.section);
	const [ordered, setOrdered] = useState(true);

	// Method to order A-Z by title.
	function orderAsc() {
		if (ordered) {
			talleres.resources.sort((a, b) =>
				b["title"].localeCompare(a.title)
			);

			setOrdered(!ordered);
		} else {
			talleres.resources.sort((a, b) =>
				a["title"].localeCompare(b.title)
			);
			setOrdered(!ordered);
		}
	}
	return (
		<>
			<div className="article-header">
				<h2>{talleres.sectionName}</h2>
				<button onClick={orderAsc}>Ordenar A-Z</button>
			</div>

			<div className="article-container ">
				{talleres.resources.map((resource, index) => {
					return <Card key={index} resource={resource} />;
				})}
			</div>
		</>
	);
}

export default GalleryCard;
