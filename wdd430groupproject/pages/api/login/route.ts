import { NextApiRequest, NextApiResponse } from "next";
import { getUser, getArtisan, getUserById } from "../../../app/lib/data";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		return handleLogin(req, res);
	} else if (req.method === "GET") {
		return handleFetchUser(req, res);
	} else {
		return res.status(405).json({ message: "Method not allowed" });
	}
}

async function handleLogin(req: NextApiRequest, res: NextApiResponse) {
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
			{
				email: user.email,
				id: user.id,
				userType,
				name: user.name,
				image_url: user.image_url,
			},
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

async function handleFetchUser(req: NextApiRequest, res: NextApiResponse) {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res
			.status(401)
			.json({ message: "Authorization header missing" });
	}

	const token = authHeader.split(" ")[1];
	if (!token) {
		return res.status(401).json({ message: "Token missing" });
	}

	try {
		const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
		const user = await getUserById(decoded.id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.status(200).json(user);
	} catch (error) {
		console.error("Error verifying token or fetching user:", error);
		res.status(500).json({ message: "Internal server error" });
	}
}
