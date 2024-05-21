"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FilteredItems from "../../ui/dashboard/filtered";
import { AuthContext } from "../../lib/authContext";
import Button from "../../ui/button";
import Link from "next/link";
import AccountGrid from '@/app/ui/dashboard/account';


export default function Page() {
//need to find way to access artist id number to show their products on account page
	
	const router = useRouter();
	const { isLoggedIn, logout, user, userType } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		if (!isLoggedIn) {
			router.push("/dashboard/login");
		} else {
			setLoading(false);
		}
	}, [isLoggedIn, router]);

	const handleLogout = () => {
		logout();
		router.push("/dashboard/login");
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col">
			<h1 className="text-4xl leading-tight mb-6">
				Welcome, {user?.first_name +" "+user?.last_name}!
			</h1>
			<div className="flex flex-col sm:flex-row sm:justify-between">
				{userType === "artisan" && (
					<div className="flex flex-col">
					<h2>Your Products</h2>
					<div className="flex flex-col mb-6">
							
								{/* <FilteredItems params={user?.id} /> */}
						
							
							
					</div>
				</div>

				)}
				{userType === "artisan" && (
					<Link href="/dashboard/products/add">
						<Button>Add Products</Button>
					</Link>
				)}
			</div>
			
			{userType === "user" && (
			<div className="flex flex-col">
				<h2>Reviews</h2>
				{/* <AccountGrid /> */}
				
			</div>

			)}
			
			{isLoggedIn && (
				<Button
					onClick={handleLogout}
					className="mt-4"
				>
					Logout
				</Button>
			)}
		</div>
	);
}
