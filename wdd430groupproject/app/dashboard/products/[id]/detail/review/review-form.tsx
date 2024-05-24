"use client";

import React, { useState, useEffect } from "react";
import { Review } from "@/app/lib/definitions";
import Button from "@/app/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext"; // Import the useAuth hook

const ProductReviewForm: React.FC = () => {
	const router = useRouter();
	const pathname = usePathname();
	const item_id = pathname ? pathname.split("/")[3] : "";
	const { user, isLoggedIn } = useAuth(); // Access user and isLoggedIn from context

	const [review, setReview] = useState<Omit<Review, "id" | "user_id">>({
		item_id: item_id,
		rate: 0,
		text: "",
		date: new Date(),
	});

	const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setReview({ ...review, rate: parseInt(event.target.value) });
	};

	const handleTextChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setReview({ ...review, text: event.target.value });
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!isLoggedIn || !user?.id) {
			console.error("User is not logged in or user ID is missing");
			return;
		}

		try {
			const currentDate = new Date();
			const isoDate = currentDate.toISOString();

			const response = await fetch("/api/reviews/route", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...review, date: isoDate, user_id: user.id }), // Add user_id to the review
			});

			if (!response.ok) {
				const contentType = response.headers.get("Content-Type");
				if (contentType && contentType.includes("application/json")) {
					const errorData = await response.json();
					console.error("Error data:", errorData);
					throw new Error(
						`Failed to submit review: ${errorData.message}`
					);
				} else {
					const errorText = await response.text();
					console.error("Error text:", errorText);
					throw new Error(`Failed to submit review: ${errorText}`);
				}
			}

			const data = await response.json();
			console.log("Review submitted:", data);

			router.push(`/dashboard/products/${item_id}/detail`);
		} catch (error) {
			console.error("Error submitting review:", error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-tan shadow-2xl w-auto border rounded px-8 pt-6 pb-8 mb-4"
		>
			<div className="mb-4">
				<label
					htmlFor="rating"
					className="block text-black-700 text-2xl font-bold mb-2"
				>
					Rating:
				</label>
				<input
					type="number"
					id="rating"
					min={1}
					max={5}
					value={String(review.rate)}
					onChange={handleRateChange}
					className="shadow appearance-none border rounded w-10 min-w-16 py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
				/>{" "}
			</div>
			<div className="mb-4">
				<label
					htmlFor="text"
					className="block text-black-700 text-2xl font-bold mb-2"
				>
					Comment:
				</label>
				<textarea
					id="text"
					value={review.text}
					onChange={handleTextChange}
					className="shadow appearance-none border rounded w-95 min-w-80 h-72 py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<Button type="submit">Submit Review</Button>
		</form>
	);
};

export default ProductReviewForm;
