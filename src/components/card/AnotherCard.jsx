import React from 'react'
import "./anotherCard.css"
function AnotherCard({
	image,
	title,
	bodyText,
	url="#"
}) {
	return (
		<a href={url}>
			<div className="card-body-v2">
				<img src={image} alt="card image" className="card-img_v2" />
				{/* <div className="images-div-v2">
			</div> */}
				<div className="card-text-v2">
					<h3>{title}</h3>
					<p>{bodyText}</p>
				</div>
			</div>
		</a>
	);
}

export default AnotherCard
