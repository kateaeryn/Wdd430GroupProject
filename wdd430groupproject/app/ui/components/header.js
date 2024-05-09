import React from "react";
import logo from "/public/images/logo.png";
import NavLinks from '/app/ui/dashboard/nav-links';

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
			<div className="flex grow flex-row justify-between space-x-2 md:flex-row md:space-x-0 md:space-y-2">
			<NavLinks />
			<div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
			</div>
			{/* <nav
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
						<a href="/">Our Story</a>
					</li>
					<li className="nav-links">
						<a href="/">Shop</a>
					</li>
				</ul>
			</nav> */}
		</header>
	);
}
