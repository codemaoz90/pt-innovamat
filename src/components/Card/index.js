import React from "react";
import { Link } from "react-router-dom";
import Heart from "../Heart";
import "./styles.css";
function Card({ resource }) {
	return (
		<>
			<div className="article-card">
				<Link to={`taller/${resource.id}`}>
					<img src={resource.image} alt={resource.description} />
				</Link>
				<div className="card__details">
					<span className="tag">{resource.tag}</span>

					<div className="name">{resource.title}</div>
					<p>{resource.description}</p>
					<Heart resource={resource} />
				</div>
			</div>
		</>
	);
}

export default Card;
