import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => setMatches(media.matches);
		window.addEventListener("resize", listener);
		return () => window.removeEventListener("resize", listener);
	}, [matches, query]);

	return matches;
};

export default function NavBar() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	function toggleBurger(matches) {
		const hamburgerButton = document.querySelector(".hamburgerButton");
		const menu = document.querySelector(".menu");

		switch (matches) {
			case true:
				hamburgerButton.classList.add("hidden");
				menu.classList.remove("hidden");
				break;
			case false:
				hamburgerButton.classList.remove("hidden");
				menu.classList.add("hidden");
				break;
			default:
				break;
		}
	}
	const handleHamburgerClick = (event) => {
		event.preventDefault();
		const hamburgerButton = document.querySelector(".hamburgerButton");
		const menu = document.querySelector(".menu");
		hamburgerButton.classList.toggle("active");
		menu.classList.toggle("hidden");
	};

	const handleMenuClick = (event) => {
		event.preventDefault();
		const hamburgerButton = document.querySelector(".hamburgerButton");
		const menu = document.querySelector(".menu");

		if (!isDesktop) {
			hamburgerButton.classList.remove("active");
			menu.classList.add("hidden");
		}
	};

	useEffect(() => {
		toggleBurger(isDesktop);
	}, [isDesktop]);

	return (
		<nav>
			<div className="navBar">
				<Link to="/">
					<h1>
						{`<`}
						CA
						{`/>`}
					</h1>
				</Link>
				<div>
					<button className="hamburgerButton" onClick={handleHamburgerClick}>
						<div className="bar"></div>
					</button>
				</div>
			</div>
			<ul className="menu hidden">
				<li onClick={(e) => handleMenuClick(e)}>
					<Link to="/">Home</Link>
				</li>
				<li onClick={(e) => handleMenuClick(e)}>
					<Link to="/about">About</Link>
				</li>
				<li onClick={(e) => handleMenuClick(e)}>
					<Link to="/contact">Contact</Link>
				</li>
				<li onClick={(e) => handleMenuClick(e)}>
					<Link to="/projects">Projects</Link>
				</li>
			</ul>
		</nav>
	);
}
