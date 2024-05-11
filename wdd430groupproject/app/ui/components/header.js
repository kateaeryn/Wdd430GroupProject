import React from "react";
import logo from "/public/images/logo.png";
import NavLinks from '/app/ui/dashboard/nav-links';
import Search from '/app/ui/dashboard/search';
import { UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Header() {
	return (
		<header className="flex flex-col bg-tan">
			
			<div className="flex ">
				<a href="/">
					<img
						src={logo.src}
						alt="Logo"
						style={{ width: "100px", height: "100px" }}
					/>
				</a>
				<Search placeholder="Search the Haven..." />
				<UserCircleIcon className=" w-[40px] h-[40px] m-4" />
				<ShoppingCartIcon className="w-[40px] h-[40px] m-4"/>
			</div>

			{/* Navigation links */}
			<div className="flex grow flex-row justify-between space-x-2 md:flex-row md:space-x-0 md:space-y-2 ">
			<NavLinks />
			
			</div>
			
		</header>
	);
}
