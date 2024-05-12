import React from "react";
import logo from "/public/images/title-logo.png";
import NavLinks from '/app/ui/dashboard/nav-links';
import Search from '/app/ui/dashboard/search';
import { UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header() {
	return (
		<header className="flex flex-col space-y-2 justify-between bg-tan ">
			
			<div className="flex flex-col sm:flex-row ">
				<a  href="/">
					<img className="w-full"
						src={logo.src}
						alt="Logo"
						
					/>
				</a>
				<Search placeholder="Search the Haven..." />
			<div className="flex flex-row justify-evenly">	
				<Link href="/dashboard/account/">
				<UserCircleIcon className=" w-[40px] h-[40px] m-4 stroke-brown " />
				</Link>
				<Link href="/dashboard/cart">
				<ShoppingCartIcon className="w-[40px] h-[40px] m-4 stroke-brown" />
				</Link>
				</div>
			</div>

			{/* Navigation links */}
			<div className="flex justify-evenly grow flex-wrap flex-row ">
			<NavLinks />
			
			</div>
			
		</header>
	);
}
