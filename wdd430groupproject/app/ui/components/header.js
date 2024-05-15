import React from "react";
<<<<<<< HEAD
import logo from "/public/images/logo.png";
import NavLinks from "/app/ui/dashboard/nav-links";
import Image from "next/image";

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
          <Image src={logo.src} alt="Logo" width={75} height={75} />
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
=======
import logo from "/public/images/title-logo.png";
import NavLinks from '/app/ui/dashboard/nav-links';
import Search from '/app/ui/dashboard/search';
import { UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Suspense from 'react';

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
				<Suspense>
				<Search placeholder="Search the Haven..." />
				</Suspense>
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
>>>>>>> 6dec4fb4305712cafe0b5611fff3fdaaee19aa52
}
