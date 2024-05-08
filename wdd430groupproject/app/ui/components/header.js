import React from "react";
import logo from "/app/images/logo.png";

export default function Header() {
	return (
		<header style={{ backgroundColor: "#58592A" }}>
			{/* Logo */}
			<div
				className="logo-container"
				style={{
					padding: "10px",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<a href="/">
					<img
						src={logo.src}
						alt="Logo"
						style={{ width: "100px", height: "100px" }}
					/>
				</a>
			</div>

			{/* Navigation links */}
			<nav
				className="navigation"
				style={{ padding: "20px", textAlign: "center", color: "#fff" }}
			>
				<ul
                    className="nav-bar"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "40px",
					}}
				>
					<li className="nav-links">
						<a href="/">Home</a>
					</li>
					<li className="nav-links">
						<a href="/">About</a>
					</li>
					<li className="nav-links">
						<a href="/">Shop</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
