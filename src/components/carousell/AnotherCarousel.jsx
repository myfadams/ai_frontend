import React, { useState, useEffect, useRef } from "react";
import "./carousell.css";
import AnotherCard from "../card/AnotherCard";

const Carousell = ({ carouInfo }) => {
	const [currentIndex, setCurrentIndex] = useState(1); // Start at first real slide
	const [isTransitioning, setIsTransitioning] = useState(true);
	const intervalRef = useRef(null);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);

	const totalSlides = carouInfo.length;
	const extendedSlides = [
		carouInfo[totalSlides - 1], // Clone last slide at the start
		...carouInfo,
		carouInfo[0], // Clone first slide at the end
	];

	// Auto-scroll every 7 seconds
	useEffect(() => {
		intervalRef.current = setInterval(goToNext, 7000);
		return () => clearInterval(intervalRef.current);
	}, []);

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
						{infos.map((card) => (
							<div className="strat-div">
								<AnotherCard
									image={card.image}
									bodyText={
										card.body
									}
									title={card.title}
									url={card.url}
								/>
							</div>
						))}
					</div>
				))}
			</div>
			<button className="prev carou-button" onClick={goToPrevious}>
				&lt;
			</button>
			<button className="next carou-button" onClick={goToNext}>
				&gt;
			</button>
		</div>
	);
};

export default Carousell;
