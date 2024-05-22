import React from "react";
import Image from "next/image";
import CatLinks from "../app/ui/dashboard/categories";
import heroimage from "/public/images/heroimage.jpg";
import FeaturedLinks from "../app/ui/dashboard/featured";
import logo from "/public/images/blurb.png";
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Handcrafted Haven',
};

export default function LandingPage() {
	return (
		<>
			<div className="md:flex bg-tan justify-evenly gap-0">
				<div className="flex flex-col md:flex-row justify-center w-full max-w-[1100px] relative md:max-h-90 ">
					<h3 className="bg-beige text-center rounded-3xl font-serif text-2xl text-brown absolute top-4 mx-8 p-2 md:hidden">
						The place to find unique handcrafted gifts for your home
						and yourself
					</h3>
					<Image
						src={heroimage}
						sizes="(min-width: 780px) 50vw, 100vw"
						className="w-full h-full"
						alt="vintage crafting supplies"
						priority={true}

					></Image>
				</div>
				<div className="hidden md:flex size-full md:justify-center">
					<Image
						src={logo}
						priority={true}
						alt="Handcrafted Haven Logo"
						width={1000}
						height={750}
						sizes="(min-width: 2120px) 1000px, calc(46.21vw + 30px)"
					></Image>
				</div>
			</div>
			<div className=" hidden sm:flex flex-col flex-wrap bg-tan text-5xl text-brown text-center ">
				<h2>Featured Items</h2>
				<div className="flex flex-wrap flex-row justify-evenly p-3 md:p-8 ">
					<FeaturedLinks />
				</div>
			</div>
			<div className="bg-tan flex flex-col text-5xl text-brown text-center">
				<h2>Categories</h2>
				<div className="flex flex-wrap flex-row justify-evenly">
					<CatLinks />
				</div>
			</div>
		</>
	);
}
