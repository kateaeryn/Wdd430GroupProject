import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { sql } from "@vercel/postgres";

// Interfaces for Customer and Artisan
interface Customer {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	confirm_password: string;
	image_url?: string;
}

interface Artisan {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	confirm_password: string;
	story?: string;
	image_url?: string;
}

const isCustomer = (data: any): data is Customer => {
	return data.type === "customer";
};

const isArtisan = (data: any): data is Artisan => {
	return data.type === "artisan";
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	const {
		first_name,
		last_name,
		email,
		password,
		confirm_password,
		image_url,
		type,
		story,
	} = req.body;

	if (!first_name || !last_name || !email || !password || !confirm_password) {
		return res.status(400).json({ message: "Missing required fields" });
	}

	if (password !== confirm_password) {
		return res.status(400).json({ message: "Passwords do not match" });
	}

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		if (isCustomer(req.body)) {
			await sql`
        INSERT INTO users (first_name, last_name, email, password, image_url)
        VALUES (${first_name}, ${last_name}, ${email}, ${hashedPassword}, ${image_url || ""})
      `;
		} else if (isArtisan(req.body)) {
			await sql`
        INSERT INTO artisans (first_name, last_name, email, password, story, image_url)
        VALUES (${first_name}, ${last_name}, ${email}, ${hashedPassword}, ${story || ""}, ${image_url || ""})
      `;
		} else {
			return res
				.status(400)
				.json({ message: "Invalid registration type" });
		}

		return res.status(200).json({ message: "Registration successful" });
	} catch (error) {
		console.error("Error during registration:", error);

		const errorMessage =
			error instanceof Error ? error.message : "Server error";
		return res.status(500).json({ message: errorMessage });
	}
};

export default handler;
