import { NextApiRequest, NextApiResponse } from "next";
import { postItemReview } from "@/app/lib/data";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { item_id, user_id, text, rate } = req.body;

		console.log("Request Body:", req.body); // Log the request body

		// Get the current date and time from the system
		const currentDate = new Date();

		if (!item_id || !user_id || !text || typeof rate === "undefined") {
			res.status(400).json({ error: "Missing required fields" });
			return;
		}

		try {
			const review = await postItemReview(
				item_id,
				user_id,
				text,
				rate,
				currentDate // Use the current date and time from the system
			);

			// Ensure response content type is JSON
			res.setHeader("Content-Type", "application/json");
			res.status(200).json(review);
		} catch (error) {
			console.error("Error submitting review:", error);
			res.setHeader("Content-Type", "application/json");
			res.status(500).json({ error: "Failed to submit review" });
		}
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
