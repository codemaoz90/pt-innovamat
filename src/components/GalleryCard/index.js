import React from "react";
import Card from "../Card";
function GalleryCard(props) {
	console.log("PROPS =>>> ", props);
	return (
		<>
			<div className="article-header">
				<h2>{props.section.sectionName}</h2>
				<button>Ordenar A-Z</button>
			</div>

			<div className="article-container ">
				{props.section.resources.map((resource, index) => {
					return <Card key={index} resource={resource} />;
				})}
			</div>
		</>
	);
}

export default GalleryCard;
