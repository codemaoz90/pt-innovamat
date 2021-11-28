import React from "react";

import Heart from "../Heart";
import "./styles.css";
function Card() {
	return (
		<>
			<div className="site-container">
				<div class="article-container">
					<div class="article-card">
						<img
							src="https://images.unsplash.com/photo-1633113092754-523fd2d9a90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							alt="Lago di Braies"
						/>

						<div class="card__details">
							<span class="tag">Nature</span>
							<span class="tag">Lake</span>

							<div class="name">Lago di Braies</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Consectetur sodales morbi
								dignissim sed diam pharetra vitae ipsum odio.
							</p>
							<Heart />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
