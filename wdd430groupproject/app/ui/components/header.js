import React from "react";
import logo from "/public/images/title-logo.png";
import NavLinks from '/app/ui/dashboard/nav-links';
import Search from '/app/ui/dashboard/search';
import { UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
// import Suspense from 'react';

export default function Header() {
	return (
		<header className="flex flex-col space-y-2 bg-tan ">
			
			<div className="flex flex-col sm:flex-row  ">
				<div className=" relative flex justify-center">
				<a href="/">
					<Image className="w-full px-8 "
						src={logo.src}
						alt="Logo"
						
					/>
				</a>
				</div>
				{/* <Suspense> */}
				<Search placeholder="Search the Haven..." />
				{/* </Suspense> */}
			<div className="flex flex-row justify-evenly sm:self-center">	
				<Link href="/dashboard/account/">
				<UserCircleIcon className=" w-[40px] h-[40px] m-4 stroke-brown xl:w-[50px] xl:h-[50px]" />
				</Link>
				<Link href="/dashboard/cart">
				<ShoppingCartIcon className="w-[40px] h-[40px] m-4 stroke-brown xl:w-[50px] xl:h-[50px]" />
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
