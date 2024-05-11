import React from "react";
// import image from "/public/images/blank-box.png";
import blankBox from "/public/images/blank-box.png";
import CatLinks from "../app/ui/dashboard/categories";

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
                    color: "#261B14",

                    margin: "3rem",
                }}
            >
                Handcrafted Haven
            </h1>

            <h3>
                Handcrafted Haven is a place to find unique, handcrafted items.
            </h3>

            <div className="categories-container">
                <h2>Categories</h2>
                <div className="categories-home">
                    <CatLinks />
                </div>
            </div>

            <div className="features-container">
                <h2>Featured Items</h2>
                <ul className="features-home">
                    <li className="features-card">
                        <a href="/">
                            <img src={blankBox.src} alt="placeholder image" />
                        </a>
                    </li>

                    <li className="features-card">
                        <a href="/">
                            <img src={blankBox.src} alt="placeholder image" />
                        </a>
                    </li>

                    <li className="features-card">
                        <a href="/">
                            <img src={blankBox.src} alt="placeholder image" />
                        </a>
                    </li>

                    <li className="features-card">
                        <a href="/">
                            <img src={blankBox.src} alt="placeholder image" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
