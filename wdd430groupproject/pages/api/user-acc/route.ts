import { NextApiRequest, NextApiResponse } from "next";
import { getCustomerReviews } from "@/app/lib/data";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const { id } = req.query;

        try {
            const reviews = await getCustomerReviews(id as string);
            res.status(200).json(reviews);
            console.log(reviews);
        } catch (error) {
            console.error("Error fetching user reviews:", error);
            res.status(500).json({ error: "Failed to fetch user reviews" });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    
}
