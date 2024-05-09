import React from "react";
import logo from "/public/images/logo.png";

export default function Footer() {
	return (
		<footer
			className="footer"
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				backgroundColor: "#D9BCA3",
				padding: "10px",
			}}
		>
			{/* Logo */}
			<a href="/">
				<img
					src={logo.src}
					alt="Logo"
					style={{ width: "75px", height: "75px", padding: "10px" }}
				/>
			</a>

			<p>&copy; 2024 Handcrafted Haven</p>
		</footer>
	);
}
