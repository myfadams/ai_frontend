import React from 'react'
import "./card.css"
function Card({ imagesArray, title, bodyText, button1Text, button2Text }) {
	return (
		<div className="card-body">
			<div className="images-div">
				{imagesArray.map((link, index) => (
					<img src={link} alt="card image" key={index} />
				))}
			</div>
			<div className="card-text">
				<h3>{title}</h3>
				<p>{bodyText}</p>
			</div>
      <div className='card-buttons'>
        <button className='card-button'>{button1Text}</button>
        <a href="#">{button2Text}</a>
      </div>
		</div>
	);
}

export default Card
