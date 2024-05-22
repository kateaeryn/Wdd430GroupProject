"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../lib/authContext";
import Button from "../../ui/button";
import Link from "next/link";
import ReviewGrid from '@/app/ui/dashboard/reviews';
import FilteredItems from "../../ui/dashboard/filtered";

export default function Page() {
	const router = useRouter();
	const { isLoggedIn, logout, user, userType } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		if (!isLoggedIn) {
			router.push("/dashboard/login");
		} else {
			setLoading(false);
		}
	}, [isLoggedIn, router]);

	useEffect(() => {
		const fetchData = async () => {
			if (userType === "artisan") {
				const response = await fetch(`/api/artisan-acc/route?id=${user?.id}`);
				const data = await response.json();
				setProducts(data);
			} else if (userType === "user") {
				const response = await fetch(`/api/user-acc/route?id=${user?.id}`);
				const data = await response.json();
				setReviews(data);
			}
		};

		if (user && user.id) {
			fetchData();
		}
	}, [user, userType]);

	const handleLogout = () => {
		logout();
		router.push("/dashboard/login");
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col">
			<h1 className="text-5xl leading-tight mb-6">
				Welcome, {user?.first_name} {user?.last_name}!
			</h1>
			
			<div className="flex ">
				{userType === "artisan" && (
					<div className="flex flex-col">
						<h2>Your Products</h2>
						<div className="flex flex-col mb-6">
							<FilteredItems items={products} />
						</div>
						<Link href="/dashboard/products/add">
							<Button>Add Products</Button>
						</Link>
					</div>
				)}
				{userType === "user" && (
					<div className="flex flex-col">
						<h2 className="text-3xl">Your Reviews</h2>
						<ReviewGrid reviews={reviews} />
					</div>
				)}
			</div>
			{isLoggedIn && (
				<Button onClick={handleLogout} className="mt-4">
					Logout
				</Button>
			)}
		</div>
	);
}
