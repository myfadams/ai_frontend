import React from 'react'
import "./TopComp.css"
function TopComponent() {
  return (
		<div className="topper">
			<p>The future of GTM AI is here.</p>
			<a href="#" className="get-book">
				Get the book
				<div
					style={{
						height: "35px",
						width: "35px",
						backgroundColor: "#5d5d5d",
						borderRadius: "6px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img src="./right.svg" alt="" width={"20px"} className="arrow" />
				</div>
			</a>
		</div>
	);
}

export default TopComponent
