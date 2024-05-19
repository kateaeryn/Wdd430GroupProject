import { NextApiRequest, NextApiResponse } from "next";
import { getUser, getArtisan } from "../../../app/lib/data";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	try {
		const { email, password } = req.body;

		// Check users table
		let user = await getUser(email);
		let userType = "user";

		// If not found in users table, check artisans table
		if (!user) {
			user = await getArtisan(email);
			userType = "artisan";
		}

		if (!user) {
			console.log("User not found");
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			console.log("Password does not match");
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = jwt.sign(
			{ email: user.email, id: user.id, userType, name: user.name, image_url: user.image_url },
			JWT_SECRET,
			{
				expiresIn: "1h",
			}
		);

		return res.status(200).json({ token, userType });
	} catch (error) {
		console.error("Internal server error", error);
		return res.status(500).json({ message: "Internal server error" });
	}
}
