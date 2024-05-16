import { sql } from "@vercel/postgres";
import { User } from "./definitions";

export async function getUser(email: string) {
	try {
		const user = await sql`SELECT * FROM users WHERE email=${email}`;
		return user.rows[0] as User;
	} catch (error) {
		console.error("Failed to fetch user:", error);
		throw new Error("Failed to fetch user.");
	}
}

export async function findUser(email: string) {
	try {
		const result = await sql`SELECT * FROM users WHERE email = ${email}`;
		if (result.rowCount > 0) {
			return result.rows[0];
		} else {
			return null;
		}
	} catch (error) {
		console.error("Error finding user:", error);
		return null;
	}
}
