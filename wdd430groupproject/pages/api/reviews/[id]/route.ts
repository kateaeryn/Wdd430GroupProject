import { NextApiRequest, NextApiResponse } from "next";
import {
    getReviewById,
    updateReviewById,
    deleteReviewById,
} from "@/app/lib/data";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;

    if (typeof id !== "string") {
        return res.status(400).json({ error: "Invalid review ID" });
    }

    if (req.method === "GET") {
        try {
            const review = await getReviewById(id);
            res.status(200).json(review);
        } catch (error) {
            console.error("Error fetching review:", error);
            res.status(500).json({ error: "Failed to fetch review" });
        }
    } else if (req.method === "PUT") {
        try {
            const { item_id, user_id, text, rate, date } = req.body;

            // Validate input data
            if (
                typeof item_id !== "string" ||
                typeof user_id !== "string" ||
                typeof text !== "string" ||
                typeof rate !== "number" ||
                !(date instanceof Date || typeof date === "string")
            ) {
                return res.status(400).json({ error: "Invalid input data" });
            }

            // If date is a string, convert it to a Date object
            const dateObj = typeof date === "string" ? new Date(date) : date;

            const updatedReview = await updateReviewById(
                id,
                item_id,
                user_id,
                text,
                rate,
                dateObj
            );
            res.status(200).json(updatedReview);
        } catch (error) {
            console.error("Error updating review:", error);
            res.status(500).json({ error: "Failed to update review" });
        }
    } else if (req.method === "DELETE") {
        try {
            await deleteReviewById(id);
            res.status(204).end();
        } catch (error) {
            console.error("Error deleting review:", error);
            res.status(500).json({ error: "Failed to delete review" });
        }
    } else {
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
