"use client";

import EditReviewForm from '@/app/ui/edit-review-form';
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/app/lib/authContext";

export default function EditReviewPage() {
	const { isLoggedIn } = useContext(AuthContext);
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	return (
		<div className="flex flex-col items-center">
			<h2>Edit Review</h2>
			{hydrated ? (
				isLoggedIn ? (
					<EditReviewForm />
				) : (
					<p>You must log in to edit a review</p>
				)
			) : (
				<p>You must log in to edit a review</p>
			)}
		</div>
	);
}
