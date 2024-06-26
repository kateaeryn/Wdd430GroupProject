import { sql } from "@vercel/postgres";
import {
	User,
	Item,
	Artisans,
	Review,
	ProductForm,
	ReviewForm,
} from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function getUser(email: string) {
	try {
		const user = await sql`SELECT * FROM users WHERE email = ${email}`;
		return user.rows[0] as User;
	} catch (error) {
		console.error("Failed to fetch user:", error);
		throw new Error("Failed to fetch user.");
	}
}

export async function getArtisan(email: string) {
	try {
		const artisan =
			await sql`SELECT * FROM artisans WHERE email = ${email}`;
		return artisan.rows[0] as Artisans;
	} catch (error) {
		console.error("Failed to fetch artisan:", error);
		throw new Error("Failed to fetch artisan.");
	}
}

export async function getUserById(id: string) {
	try {
		// Check users table first
		let user = await sql`SELECT * FROM users WHERE id = ${id}`;
		if (user.rows.length > 0) {
			return user.rows[0] as User;
		}

		// If not found in users table, check artisans table
		let artisan = await sql`SELECT * FROM artisans WHERE id = ${id}`;
		if (artisan.rows.length > 0) {
			return artisan.rows[0] as Artisans;
		}

		// If user not found in both tables
		throw new Error("User not found");
	} catch (error) {
		console.error("Failed to fetch user by ID:", error);
		throw new Error("Failed to fetch user by ID.");
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
	noStore();
	try {
		const product =
			await sql`SELECT items.id, items.artisan_id, items.title, items.price,
        items.category, items.description, items.image_url, items.status, artisans.first_name, artisans.last_name
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
	noStore();
	try {
		const review =
			await sql`SELECT reviews.id, reviews.user_id, reviews.item_id, reviews.text,reviews.date, reviews.rate, users.first_name, users.last_name
        FROM reviews
        JOIN users on users.id = reviews.user_id
        WHERE reviews.item_id = ${id};`;
		return review.rows;
	} catch (error) {
		console.error("Database Error", error);
		throw new Error("Failed to retrieve reviews");
	}
}

export async function fetchItems() {
	noStore();
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
	noStore();
	try {
		const data = await sql<Artisans>`
        SELECT 
        id, 
        first_name,
		last_name, 
        email, 
        image_url,
		story
        FROM artisans
        `;
		
		return data.rows;
	} catch (err) {
		console.error("Database Error:", err);
		throw new Error("Failed to fetch all artisans.");
	}
}

export async function getSingleArtisan(id: string) {
	try {
		const data = await sql`
        SELECT id, first_name, last_name, story, image_url
        FROM artisans
        WHERE id=${id}
        `;

		const items = data.rows;
		return items;
	} catch (err) {
		console.error("Database Error:", err);
		throw new Error("Failed to fetch artisan.");
	}
}

//used in the all products page to filter items in the search and by price
export async function fetchItemsByPriceOrSearch(query: string, price: string) {
	noStore();
	if (price == "LowToHigh") {
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
        Order by CAST(price AS Float)  asc
    `;

			const items = data.rows;
			return items;
		} catch (error) {
			console.error("Database Error:", error);
			throw new Error("Failed to fetch items.");
		}
	} else if (price == "HighToLow") {
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
        Order by CAST(price AS Float)  desc
    `;

			const items = data.rows;
			return items;
		} catch (error) {
			console.error("Database Error:", error);
			throw new Error("Failed to fetch items.");
		}
	} else {
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
			throw new Error("Failed to fetch items.");
		}
	}
}

//used in the categories component
export async function fetchCategory(category: string) {
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
        category = ${category} 
    `;

		const items = data.rows;
		return items;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch categories.");
	}
}

//used in the categories pages to filter by category, price, and search
export async function filteredCategory(
	category: string,
	query: string,
	price: string
) {
	noStore();
	if (price == "LowToHigh") {
		try {
			const data = await sql<Item>`
    SELECT *
      FROM items
      WHERE
        category = ${category}
        AND
          (title ILIKE ${`%${query}%`} OR
          price::text ILIKE ${`%${query}%`} OR
          description ILIKE ${`%${query}%`} OR
          status ILIKE ${`%${query}%`})
          Order by CAST(price AS Float)  asc
    `;

			const items = data.rows;
			return items;
		} catch (error) {
			console.error("Database Error:", error);
			throw new Error("Failed to fetch items.");
		}
	} else if (price == "HighToLow") {
		try {
			const data = await sql<Item>`
    SELECT *
      FROM items
      WHERE
      category = ${category}
      AND
        (title ILIKE ${`%${query}%`} OR
        price::text ILIKE ${`%${query}%`} OR
        description ILIKE ${`%${query}%`} OR
        status ILIKE ${`%${query}%`})
        Order by CAST(price AS Float)  desc
    `;

			const items = data.rows;
			return items;
		} catch (error) {
			console.error("Database Error:", error);
			throw new Error("Failed to fetch items.");
		}
	} else {
		try {
			const data = await sql<Item>`
    SELECT *
      FROM items
      WHERE
      category = ${category}
        AND
          (title ILIKE ${`%${query}%`} OR
          price::text ILIKE ${`%${query}%`} OR
          description ILIKE ${`%${query}%`} OR
          status ILIKE ${`%${query}%`})
    `;

			const items = data.rows;
			return items;
		} catch (error) {
			console.error("Database Error:", error);
			throw new Error("Failed to fetch items.");
		}
	}
}

export async function fetchArtistItems(id: string) {
	noStore();
	try {
		const data =
			await sql`SELECT id, title, image_url FROM items WHERE artisan_id=${id}`;
		return data.rows;
	} catch (error) {
		console.error("database error", error);
		throw new Error("failed to fetch artist's creations");
	}
}

export async function getCustomerReviews(id: string) {
	try {
		const data = await sql`SELECT 
		reviews.id, user_id, item_id, text, date, rate, items.title
		FROM reviews
		JOIN items on reviews.item_id = items.id
		WHERE user_id=${id}`;
		return data.rows;
	} catch (error) {
		console.error("Database Error", error);
		throw new Error("Failed to fetch customer's reviews");
	}
}

export async function getReviewBasics(id: string) {
	noStore();
	try {
		const data = await sql<ReviewForm>`SELECT
    reviews.id, text, rate, items.title
    FROM reviews
    JOIN items on reviews.item_id = items.id
    WHERE reviews.id=${id}`;

		const review = data.rows.map((review) => ({
			...review,
		}));
		console.log(review);
		return review[0];
	} catch (error) {
		console.error("Database Error", error);
		throw new Error("Failed to update review");
	}
}

export async function postItemReview(
	item_id: string,
	user_id: string,
	text: string,
	rate: number,
	date: Date
) {
	try {
		const data = await sql`
	  INSERT INTO reviews (item_id, user_id, text, rate, date)
	  VALUES (${item_id}, ${user_id}, ${text}, ${rate}, ${date.toISOString()})
	  RETURNING *;
	  `;
		return data.rows[0];
	} catch (error) {
		console.error("Database Error", error);
		throw new Error("Failed to post review");
	}
}

export async function getRating(id: string) {
	try {
		const data = await sql`SELECT rate from reviews WHERE item_id=${id}`;
		return data.rows;
	} catch (error) {
		console.error("Database Error", error);
		throw new Error("Failed to get Ratings");
	}
}

export async function fetchProductByID(id: string) {
	noStore();
	try {
		const data =
			await sql<ProductForm>`SELECT items.id, items.artisan_id, items.title, items.price,
    items.category, items.description, items.image_url, items.status
        FROM items
        WHERE id = ${id}`;

		const product = data.rows.map((product) => ({
			...product,
			// Convert amount from cents to dollars
			price: product.price / 100,
		}));
		console.log(product); // product is an empty array []
		return product[0];
	} catch (error) {
		console.error("Database Error", error);
		throw new Error("Failed to fetch Product Details");
	}
}

export async function getReviewById(id: string) {
	try {
		const review = await sql`SELECT * FROM reviews WHERE id = ${id}`;
		return review.rows[0] as Review;
	} catch (error) {
		console.error("Failed to fetch review by ID:", error);
		throw new Error("Failed to fetch review by ID.");
	}
}

export async function updateReviewById(
	id: string,
	item_id: string,
	user_id: string,
	text: string,
	rate: number,
	date: Date
) {
	const formattedDate = date ? date.toISOString() : new Date().toISOString();

	try {
		const review = await sql`
      UPDATE reviews
      SET item_id = ${item_id}, user_id = ${user_id}, text = ${text}, rate = ${rate}, date = ${formattedDate}
      WHERE id = ${id}
      RETURNING *;
    `;
		return review.rows[0] as Review;
	} catch (error) {
		console.error("Failed to update review by ID:", error);
		throw new Error("Failed to update review by ID.");
	}
}

export async function deleteReviewById(id: string) {
	try {
		await sql`DELETE FROM reviews WHERE id = ${id}`;
	} catch (error) {
		console.error("Failed to delete review by ID:", error);
		throw new Error("Failed to delete review by ID.");
	}
}
