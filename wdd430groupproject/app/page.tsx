import React from "react";
import Image from "next/image";
import blankBox from "/public/images/blank-box.png";
import CatLinks from "../app/ui/dashboard/categories";
import heroimage from "/public/images/heroimage.jpg";

export default function LandingPage() {
    return (
        <>
        <div className="flex flex-col justify-center items-center h-600">
          <div className=""> 
           <h3 className="bg-beige text-center rounded-3xl font-serif text-2xl text-brown absolute m-8 z-index-10 p-1">
                Handcrafted Haven is the place to find unique, handcrafted items.
            </h3>
                    <Image src={heroimage} className="" alt="vintage crafting supplies"></Image>
                </div>   
                <div>
            
            
                </div>
            </div>
            <div className="bg-tan flex flex-col text-5xl text-brown text-center">
                <h2>Categories</h2>
                <div className="flex flex-wrap flex-row justify-evenly p-3">
                    <CatLinks />
                </div>
            </div>
</>
            /* <div className="features-container">
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
            </div> */
        
    );
}
