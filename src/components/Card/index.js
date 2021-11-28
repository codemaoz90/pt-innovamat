import React from "react";

import Heart from "../Heart";
import "./styles.css";
function Card({ resource }) {
	return (
		<>
			<div className="article-card">
				<img src={resource.image} alt={resource.description} />

				<div className="card__details">
					<span className="tag">{resource.tag}</span>

					<div className="name">{resource.title}</div>
					<p>{resource.description}</p>
					<Heart />
				</div>
			</div>
		</>
	);
}

export default Card;
