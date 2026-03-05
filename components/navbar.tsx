"use client";

import { useEffect, useRef } from "react";

export default function Navbar() {
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const nav = navRef.current;
		if (!nav) return;

		const handleScroll = () => {
			if (window.scrollY > 60) {
				nav.classList.add("scrolled");
			} else {
				nav.classList.remove("scrolled");
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav ref={navRef} className='nav'>
			<a href='#' className='nav-logo'>
				Alisa Design
			</a>

			<ul className='nav-links'>
				{[
					{ label: "Studio", href: "#philosophy" },
					{ label: "Work", href: "#portfolio" },
					{ label: "Services", href: "#services" },
					{ label: "Contact", href: "#contact" }
				].map(({ label, href }) => (
					<li key={label}>
						<a href={href}>{label}</a>
					</li>
				))}
			</ul>

			<a href='#contact' className='nav-cta'>
				Get in Touch
			</a>

			<button className='nav-hamburger' aria-label='Open menu'>
				<span />
				<span />
				<span />
			</button>
		</nav>
	);
}
