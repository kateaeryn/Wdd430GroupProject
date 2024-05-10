"use client";

import React, { useState } from "react";

interface ReviewFormProps {
	onSubmit: (review: Review) => void;
}

interface Review {
	title: string;
	rating: number;
	comment: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
	const [review, setReview] = useState<Review>({
		title: "",
		rating: 0,
		comment: "",
	});

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSubmit(review);
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setReview((prevReview) => ({
			...prevReview,
			[name]: value,
		}));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
		>
			<label className="rounded-md bg-gray-50 p-4 md:p-6">
				Title:
				<input
					type="text"
					name="title"
					value={review.title}
					onChange={handleInputChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</label>
			<br />
			<label className="block text-red-700 text-sm font-bold mb-2">
				Rating:
				<select
					name="rating"
					value={review.rating}
					onChange={handleInputChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				>
					<option value="">Select rating</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</label>
			<br />
			<label className="block text-gray-700 text-sm font-bold mb-2">
				Comment:
				<textarea
					name="comment"
					value={review.comment}
					onChange={handleInputChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</label>
			<br />
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				Submit Review
			</button>
		</form>
	);
};

export default ReviewForm;
