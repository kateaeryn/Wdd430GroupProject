import React from "react";
import Image from "next/image";
import blankBox from "/public/images/blank-box.png";
import CatLinks from "../app/ui/dashboard/categories";
import heroimage from "/public/images/heroimage.jpg";
import FeaturedLinks from "../app/ui/dashboard/featured";

export default function LandingPage() {
    return (
        <>
        <div className="md:flex w-full lg:flex-col lg:bg-heroimage">
          <div className="flex flex-col md:flex-row md:justify-between justify-center "> 
           <h3 className="bg-beige text-center rounded-3xl font-serif text-2xl text-brown absolute top-50 mx-8 p-1 md:w-25 md:p-1 md:mt-5 lg:w-60 lg:text-5xl lg:mt-20">
                Handcrafted Haven is the place to find unique, handcrafted items.
            </h3>
                    <Image src={heroimage} className="w-full" alt="vintage crafting supplies"></Image>
                </div>   
                
            
                <div className=" hidden sm:flex flex-col flex-wrap bg-tan text-5xl text-brown text-center md:w-80  lg:absolute lg:bottom-60 lg:right-10 lg:rounded-3xl ">
                    <h2>Featured Items</h2>
                    <div className="flex flex-wrap flex-row justify-evenly p-3 md:p-8 ">
                       <FeaturedLinks /> 
                </div>
                    
            </div>
            </div>
            <div className="bg-tan flex flex-col text-5xl text-brown text-center ">
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
