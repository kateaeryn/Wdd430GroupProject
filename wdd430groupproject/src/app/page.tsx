import React from "react";
import image from "./images/blank-box.png";
import blankBox from "./images/blank-box.png";

export default function LandingPage() {
	return (
		<div
			className="home-page"
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1
				style={{
					fontSize: "3.5rem",
					fontWeight: "bold",
					color: "#261B14",
					textDecoration: "underline",
          margin: "3rem",
				}}
			>
				Handcrafted Haven
			</h1>

			<img
				src={image.src}
				width={500}
				height={350}
				className="hidden md:block"
				alt="hero desktop image"
			/>

			<p>
				Handcrafted Haven is a place to find unique, handcrafted items.
			</p>

      <div className="categories-container">
			<h2>Categories</h2>

			<ul className="categories-home">
				<li className="category-card">
					<a href="/">
						Home Decor
						<img
							src={blankBox.src}
							alt="placeholder image"
							style={{ width: "100px", height: "100px" }}
						/>
					</a>
				</li>

				<li className="category-card">
					<a href="/">
						Textiles
						<img
							src={blankBox.src}
							alt="placeholder image"
							style={{ width: "100px", height: "100px" }}
						/>
					</a>
				</li>

				<li className="category-card">
					<a href="/">
						Art
						<img
							src={blankBox.src}
							alt="placeholder image"
							style={{ width: "100px", height: "100px" }}
						/>
					</a>
				</li>

				<li className="category-card">
					<a href="/">
						Accessories
						<img
							src={blankBox.src}
							alt="placeholder image"
							style={{ width: "100px", height: "100px" }}
						/>
					</a>
				</li>
			</ul>
      </div>

      <div className="features-container">  
      <h2>Featured Items</h2>
      <ul className="features-home">
				<li className="features-card">
					<a href="/">
						<img
							src={blankBox.src}
							alt="placeholder image"
						/>
					</a>
				</li>

        <li className="features-card">
					<a href="/">
						<img
							src={blankBox.src}
							alt="placeholder image"
						/>
					</a>
				</li>

        <li className="features-card">
					<a href="/">
						<img
							src={blankBox.src}
							alt="placeholder image"
						/>
					</a>
				</li>

        <li className="features-card">
					<a href="/">
						<img
							src={blankBox.src}
							alt="placeholder image"
						/>
					</a>
				</li>
      </ul>
      </div>

		</div>
	);
}
