import React from 'react'
import "./smallButton.css"
function SmallButton({image,onClick,classN=""}) {
  return (
		<button
			className={`small-btn `}
			onClick={() => {
				onClick();
			}}
		>
			<img src={image} alt="button image " className={`${classN}`} />
		</button>
	);
}

export default SmallButton
