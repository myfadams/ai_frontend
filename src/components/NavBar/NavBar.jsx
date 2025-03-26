import React from 'react'
import "./navbar.css"
import MenuButton from '../menuButton/MenuButton';

import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router';

const useIsVisible = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
	
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, [threshold]);
	console.log(isVisible)
    return [elementRef, isVisible];
};



function NavBar() {
	const [ref, isVisible] = useIsVisible();
	const [disable, setDisable] = useState(false);
	const navigate = useNavigate();
    const navLinks = [
			{ text: "Platform", link: "#" },
			{ text: "Use Cases", link: "#" },
			{ text: "Resources", link: "#" },
			{ text: "Pricing", link: "#" },
			{ text: "GTM AI", link: "#" },
		];
  return (
		//  ${!isVisible && "nav-hover"}
		<section className={``}>
			<div className={`navigation ${!isVisible && "nav-hover"}`}>
				<div>
					<h1 className="logo-nav">
						<a href="#">copy.ai</a>
					</h1>
				</div>
				<div className="links">
					<ul>
						{navLinks.map((link, index) => {
							return (
								<li key={index}>
									<a href={link.link}>{link.text}</a>
									<img src="./arrow.png" alt="arrow" />
								</li>
							);
						})}
					</ul>
				</div>

				<div className="account">
					<a href="" className="login">
						Login
					</a>
					<button href="" className="button" onClick={()=>{
								setDisable(true)
								//do something
								navigate("/fakenewsAi");
								setDisable(false)
					}}>
						Get a demo
					</button>
					<MenuButton />
				</div>
			</div>
			<div ref={ref} style={{ height: "1px" }}></div>
		</section>
	);
}

export default NavBar
