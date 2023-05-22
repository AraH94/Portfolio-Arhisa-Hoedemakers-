import React from "react";
function WorkCards({ title, image, content, url }) {
	const handleCLick = () => {
		window.open(url, "_blank");
	};

	return (
		<div className="card" onClick={handleCLick}>
			<img src={image} alt={title} />
			{/* <img src={require(`${image}`).default} alt={title} /> */}
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	)
}

export default WorkCards;
