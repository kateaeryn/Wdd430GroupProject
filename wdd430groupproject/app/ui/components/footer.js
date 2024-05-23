import React from "react";


export default function Footer() {
	return (
		<footer
			className="flex flex-col sm:flex-row sm:justify-between text-center bg-tan p-1">
			<a href="/" className="text-darkBrown text-3xl">
				Contact Us
			</a>
			<p className="text-3xl text-darkBrown">&copy; 2024 Handcrafted Haven</p>
		</footer>
	);
}
