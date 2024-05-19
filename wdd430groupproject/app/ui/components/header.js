"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import logo from "/public/images/title-logo.png";
import NavLinks from "/app/ui/dashboard/nav-links";
import { UserCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { AuthContext } from "../../lib/authContext";
import Image from "next/image";

export default function Header() {
	const { isLoggedIn, user } = useContext(AuthContext);
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	return (
		<header className="flex flex-col space-y-2 bg-tan">
			<div className="flex flex-col sm:flex-row">
				<div className="relative flex justify-center">
					<Link href="/">
						<Image
							className="w-full"
							width="1562"
							height="1562"
							src={logo.src}
							alt="Logo"
							priority
						/>
					</Link>
				</div>
				<div className="hidden sm:flex justify-evenly grow flex-wrap flex-row ">
					<NavLinks />
				</div>
				<div className="flex flex-row justify-evenly sm:self-center">
					{hydrated ? (
						isLoggedIn ? (
							<Link href="/dashboard/account">
								<img
									src={user?.image_url}
									alt="User Image"
									className="w-[40px] h-[40px] m-4 stroke-brown xl:w-[50px] xl:h-[50px] rounded-full hover:shadow-black hover:shadow-md cursor-pointer"
								/>
							</Link>
						) : (
							<Link href="/dashboard/login">
								<UserCircleIcon className="w-[40px] h-[40px] m-4 stroke-brown xl:w-[50px] xl:h-[50px]" />
							</Link>
						)
					) : (
						<UserCircleIcon className="w-[40px] h-[40px] m-4 stroke-brown xl:w-[50px] xl:h-[50px]" />
					)}
					<Link href="/dashboard/cart">
						<ShoppingCartIcon className="w-[40px] h-[40px] m-4 stroke-brown xl:w-[50px] xl:h-[50px]" />
					</Link>
				</div>
			</div>
			<div className="sm:hidden flex justify-evenly grow flex-wrap flex-row ">
				<NavLinks />
			</div>
		</header>
	);
}
