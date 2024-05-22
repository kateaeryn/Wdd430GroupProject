import React from "react";
import Button from "@/app/ui/button";
import Link from "next/link";

interface Review {
	id: string;
	user_id: string;
	item_id: string;
	text: string;
	date: string;
	rate: number;
}

interface ReviewProps {
	reviews: Review[];
}

const ReviewGrid: React.FC<ReviewProps> = ({ reviews }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{reviews.map((review) => (
				<div
					key={review.id}
					className="card"
				>
					<p>{review.text}</p>
					<small>{new Date(review.date).toLocaleDateString()}</small>
					<div>Rating: {review.rate}</div>
					<Link href={`/dashboard/products/${review.id}/detail/review/edit`}>
						<Button>Edit/Delete</Button>
					</Link>
				</div>
			))}
		</div>
	);
};

export default ReviewGrid;