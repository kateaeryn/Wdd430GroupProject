"use client";

import React, { useContext, useState, useEffect } from "react";
import ProductReviewForm from "./review-form";
import { AuthContext } from "@/app/lib/authContext";

export default function ProductPage() {
	const { isLoggedIn } = useContext(AuthContext);
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	return (
		<div className="flex flex-col items-center">
			<h2>Write a Review</h2>
			{hydrated ? (
				isLoggedIn ? (
					<ProductReviewForm />
				) : (
					<p>You must log in to leave a review</p>
				)
			) : (
				<p>You must log in to leave a review</p>
			)}
		</div>
	);
}
