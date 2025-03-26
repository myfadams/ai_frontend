// import React from 'react'
// import AnotherCard from '../card/AnotherCard';

// function CarousellCardSection() {
//   return (
// 		<div className="strat-div">
// 			<AnotherCard
// 				image={"./homepage1-p-500.png"}
// 				bodyText={
// 					"How a purpose-built platform accelerates your AI strategy for a competitive edge."
// 				}
// 				title={"Invest in Purpose-Built Solution, or DIY?"}
// 			/>

// 		</div>
// 	);
// }

// export default CarousellCardSection

import React, { useState, useEffect, useRef } from "react";
import "../carousell/carousell.css";
import AnotherCard from "../card/AnotherCard";
import "./carrousellCardSection.css"
import SmallButton from "../smallButton/SmallButton";
const useScreenWidth = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return screenWidth;
};
const createArray = (screenSize, arr) => {
	let mainArray = [];
	let temp = [];
	if (screenSize > 990) {
		for (let i = 0; i < arr.length; i++) {
            temp.push(arr[i]);
			if (temp.length == 3) {
				mainArray.push(temp);
				temp = [];
			} else if (arr.length - 1 === i) {
				mainArray.push(temp);
				temp = [];
			}
			
		}
		temp = [];
	} else if (screenSize > 755) {
		for (let i = 0; i < arr.length; i++) {
            temp.push(arr[i]);
			if (temp.length == 2) {
				mainArray.push(temp);
				temp = [];
			} else if (arr.length - 1 === i) {
				mainArray.push(temp);
				temp = [];
			}
		}
		temp = [];
	} else {
		for (let i = 0; i < arr.length; i++) {
            temp.push(arr[i]);
			if (temp.length == 1) {
				mainArray.push(temp);
				temp = [];
			} else if (arr.length - 1 === i) {
				mainArray.push(temp);
				temp = [];
			}
		}
		temp = [];
	}

	return mainArray;
};
const CarousellCardSection = ({ carouInfo }) => {
	const screenWidth = useScreenWidth();
    const incArray=createArray(screenWidth,carouInfo)
	const [currentIndex, setCurrentIndex] = useState(1); // Start at first real slide
	const [isTransitioning, setIsTransitioning] = useState(true);
	const intervalRef = useRef(null);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);

	const totalSlides = incArray.length;
	const extendedSlides = [
		incArray[totalSlides - 1], // Clone last slide at the start
		...incArray,
		incArray[0], // Clone first slide at the end
	];

	// Auto-scroll every 7 seconds
	// useEffect(() => {
	// 	intervalRef.current = setInterval(goToNext, 7000);
	// 	return () => clearInterval(intervalRef.current);
	// }, []);

	const goToNext = () => {
		setIsTransitioning(true);
		setCurrentIndex((prev) => prev + 1);
	};

	const goToPrevious = () => {
		setIsTransitioning(true);
		setCurrentIndex((prev) => prev - 1);
	};

	// Handle seamless looping
	useEffect(() => {
		if (currentIndex === totalSlides + 1) {
			setTimeout(() => {
				setIsTransitioning(false);
				setCurrentIndex(1);
			}, 500);
		}

		if (currentIndex === 0) {
			setTimeout(() => {
				setIsTransitioning(false);
				setCurrentIndex(totalSlides);
			}, 500);
		}
	}, [currentIndex]);

	// 👇 Handle touch events for swipe
	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e) => {
		touchEndX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		const swipeThreshold = 50; // Minimum distance for a valid swipe
		const deltaX = touchStartX.current - touchEndX.current;

		if (deltaX > swipeThreshold) {
			goToNext(); // Left swipe
		} else if (deltaX < -swipeThreshold) {
			goToPrevious(); // Right swipe
		}
	};

	return (
		<>
			<div className="strategy-header">
				<h3 className="global-h3">The anti-point solution platform</h3>
				<div className="strat-div-btn">
					<SmallButton
						image="./left-arrow.png"
						onClick={goToPrevious}
						classN="tint-img"
					/>
					<SmallButton
						image="./right-arrow.png"
						onClick={goToNext}
						classN="tint-img"
					/>
				</div>
			</div>
			<div
				className="carousel-container"
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<div
					className="carousel-slide"
					style={{
						transform: `translateX(-${currentIndex * 100}%)`,
						transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
					}}
				>
					{extendedSlides.map((infos, index) => (
						<div className="carousel-item" key={index}>
							<div className="strat-div">
								{infos.map((card, id) => (
									<AnotherCard
										image={card.image}
										bodyText={card.bodyText}
										title={card.title}
										url={card.url}
										key={id}
									/>
								))}
							</div>
						</div>
					))}
				</div>
				{/* <button className="prev carou-button" onClick={goToPrevious}>
					&lt;
				</button>
				<button className="next carou-button" onClick={goToNext}>
					&gt;
				</button> */}
			</div>
			<div className="strat-div-btn-2">
				<SmallButton
					image="./left-arrow.png"
					onClick={goToPrevious}
					classN="tint-img"
				/>
				<SmallButton
					image="./right-arrow.png"
					onClick={goToNext}
					classN="tint-img"
				/>
			</div>
		</>
	);
};

export default CarousellCardSection;
