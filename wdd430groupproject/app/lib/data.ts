import { sql } from "@vercel/postgres";
import { User, Item } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

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
    const product =
      await sql`SELECT id, items.image_url, items.title FROM items`;

    return product.rows;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch product image");
  }
}

export async function getProductDetail(id: string) {
  try {
    const product =
      await sql`SELECT items.id, items.artisan_id, items.title, items.price,
        items.category, items.description, items.image_url, items.status, artisans.name
        FROM items
        JOIN artisans on artisans.id = items.artisan_id
        WHERE items.id = ${id}`;
    return product.rows;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch Product Details");
  }
}

export async function getItemReviews(id: string) {
  try {
    const review =
      await sql`SELECT reviews.id, reviews.user_id, reviews.item_id, reviews.text,reviews.date, reviews.rate, users.name
        FROM reviews
        JOIN users on users.id = reviews.user_id
        WHERE reviews.item_id = ${id};`;
    return review.rows;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to retrieve reviews");
  }
}

//aedc7eda - 1bd6 - 4579 - ad15 - 0e975417b9a9
//72fb94c3-9518-49f7-a561-e7c108ab2625

export async function fetchItems() {
  try {
    const data = await sql<Item>`
      SELECT * FROM items`;

    const items = data.rows;
    return items;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all items.");
  }
}

export async function fetchArtisan() {
  try {
    const data = await sql`
        SELECT 
        id, 
        name, 
        email, 
        image_url
        FROM artisans
        `;

    const items = data.rows;
    return items;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all items.");
  }
}

export async function fetchFilteredItems(query: string) {
  noStore();
  try {
    const data = await sql<Item>`
    SELECT 
    id,
    artisan_id,
    title,
    price,
    category,
    description,
    image_url,
    status
      FROM items
      WHERE
        title ILIKE ${`%${query}%`} OR
        price::text ILIKE ${`%${query}%`} OR
        category ILIKE ${`%${query}%`} OR
        description ILIKE ${`%${query}%`} OR
        status ILIKE ${`%${query}%`}
    `;

    const items = data.rows;
    return items;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}
