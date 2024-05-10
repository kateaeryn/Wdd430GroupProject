"use client";

import React, { useState } from "react";
import { Review } from "./types";

const ProductReviewForm: React.FC = () => {
const [review, setReview] = useState<Review>({
    rating: 0,
    comment: "",
    title: "", // Add the missing 'title' property
});

const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview({ ...review, rating: parseInt(event.target.value) });
};

const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
) => {
    setReview({ ...review, comment: event.target.value });
};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// Handle form submission, e.g., submit review to backend
	};

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-2xl w-80 border rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label htmlFor="rating" className="block text-black-700 text-xxl font-bold mb-2">
                    Rating:
                </label>
                <input
                    type="number"
                    id="rating"
                    min={1}
                    max={5}
                    value={review.rating}
                    onChange={handleRatingChange}
                    className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="comment" className="block text-gray-700 text-xxl font-bold mb-2">
                    Comment:
                </label>
                <textarea
                    id="comment"
                    value={review.comment}
                    onChange={handleCommentChange}
                    className="shadow appearance-none border rounded w-95 h-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                type="submit"
                className="bg-green hover:bg-tan text-white w-but text-xl hover:text-black font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit Review
            </button>
        </form>
    );
};

export default ProductReviewForm;
