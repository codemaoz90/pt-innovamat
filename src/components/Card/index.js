import React from "react";
import { Link } from "react-router-dom";
import Heart from "../Heart";
import "./styles.css";
function Card({ resource }) {
	return (
		<>
			<div className="article-card">
				<Link className="card-link" to={`taller/${resource.id}`}>
					<img src={resource.image} alt={resource.description} />
				</Link>
				<div className="card__details">
					<span className="tag">{resource.tag}</span>

					<Link className="card-link" to={`taller/${resource.id}`}>
						<div className="name">{resource.title}</div>
						<p>{resource.description}</p>
					</Link>
				</div>
				<Heart resource={resource} />
			</div>
		</>
	);
}

export default Card;
