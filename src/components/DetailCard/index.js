import React, { useState, useEffect } from "react";
import "./styles.css";
import YouTube from "react-youtube";
function DetailCard(props) {
	const endpoint = `https://api.mocklets.com/mock68016/resource/${props.match.params.id}`;
	const [info, setInfo] = useState([]);

	const opts = {
		height: "390",
		width: "640",
		playerVars: {
			autoplay: 1,
		},
	};

	useEffect(() => {
		async function getInfo() {
			const response = await fetch(endpoint);
			const data = await response.json();

			setInfo(data);
		}
		getInfo();
	}, []);
	return (
		<div>
			<h2>{info.title}</h2>
			<div class="video-container">
				<YouTube
					videoId={info.videoId}
					opts={opts}
					className="video-youtube"
				/>
			</div>
			<p
				class="info-description"
				dangerouslySetInnerHTML={{ __html: info.description }}
			></p>
		</div>
	);
}

export default DetailCard;
