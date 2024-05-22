import { NextApiRequest, NextApiResponse } from "next";
import { fetchArtistItems } from "@/app/lib/data";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const { id } = req.query;

        try {
            const products = await fetchArtistItems(id as string);
            res.status(200).json(products);
        } catch (error) {
            console.error("Error fetching artisan products:", error);
            res.status(500).json({ error: "Failed to fetch artisan products" });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}