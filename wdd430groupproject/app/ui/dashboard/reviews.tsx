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
	title: string;
}

interface ReviewProps {
	reviews: Review[];
}

const ReviewGrid: React.FC<ReviewProps> = ({ reviews }) => {
	console.log(reviews);
	return (
		<div className="flex flex-col gap-4">
			{reviews.map((review) => (
				<div
					key={review.id}
					className="card border-solid border-brown border-2 rounded-md p-2"
				>
					<p className="-mb-3">{review.title}</p>
					<small className="text-xl">{new Date(review.date).toLocaleDateString()}</small>
					<div className="text-xl -mt-2">Rating: {review.rate}</div>
					<p className="text-xl">{review.text}</p>
					<Link href={`/dashboard/products/${review.id}/detail/review/edit`} >
						<Button className="-mt-0.5 -mb-0.5">Edit/Delete</Button>
					</Link>
				</div>
			))}
		</div>
	);
};

export default ReviewGrid;