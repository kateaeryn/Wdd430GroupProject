import { sql } from '@vercel/postgres';
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

export async function getAllProductImages() {
    try {
        const product = await sql`SELECT id, items.image_url, items.title FROM items`;

        return product.rows; 
    } catch (error) {
        console.error("Database Error", error);
        throw new Error("Failed to fetch product image")
    }
}

export async function getProductDetail(id: string) {
    try {
        const product = await sql
        `SELECT items.id, items.artisan_id, items.title, items.price,
        items.category, items.description, items.image_url, items.status, artisans.name
        FROM items
        JOIN artisans on artisans.id = items.artisan_id
        WHERE items.id = ${id}`;
        return product.rows;
    } catch (error) {
        console.error("Database Error", error);
        throw new Error("Failed to fetch Product Details")
    }
}

export async function getItemReviews(id: string) {
    try {
        const review = await sql
        `SELECT reviews.id, reviews.user_id, reviews.item_id, reviews.text,reviews.date, reviews.rate, users.name
        FROM reviews
        JOIN users on users.id = reviews.user_id
        WHERE reviews.item_id = ${id};`
        return review.rows;
    } catch (error) {
        console.error("Database Error", error);
        throw new Error("Failed to retrieve reviews");
    }
}

//aedc7eda - 1bd6 - 4579 - ad15 - 0e975417b9a9
//72fb94c3-9518-49f7-a561-e7c108ab2625