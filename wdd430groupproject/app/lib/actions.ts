"use server";

import { sql } from "@vercel/postgres";
import z from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import exp from "constants";
import { unstable_noStore as noStore } from 'next/cache';

const FormNewProductSchema = z.object({
  id: z.string(),
  artisan_id: z.string({
    invalid_type_error: "Please select a artist.",
  }),
  title: z.string({
    invalid_type_error: "Please type a title.",
  }),
  price: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  category: z.string({ invalid_type_error: "Please type a category." }),
  description: z.string({ invalid_type_error: "Please type a description." }),
  image_url: z.string({ invalid_type_error: "Please enter a image url." }),
  status: z.enum(["available", "unavailable"], {
    invalid_type_error: "Please select a status.",
  }),
});

const CreateProduct = FormNewProductSchema.omit({ id: true });

const UpdateProduct = FormNewProductSchema.omit({ id: true });

export type State = {
  errors?: {
    id?: string[];
    artisan_id?: string[];
    title?: string[];
    price?: string[];
    category?: string[];
    description?: string[];
    image_url?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createProduct(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateProduct.safeParse({
    artisan_id: formData.get("artisan_id"),
    title: formData.get("title"),
    price: formData.get("price"),
    category: formData.get("category"),
    description: formData.get("description"),
    image_url: formData.get("image_url"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Product.",
    };
  }

  // Prepare data for insertion into the database
  const { artisan_id, title, price, category, description, image_url, status } =
    validatedFields.data;

  const priceInCents = price * 100;

  // Insert data into the database
  try {
    await sql`
    INSERT INTO items (artisan_id, title, price, category, description, image_url, status)
    VALUES (${artisan_id}, ${title}, ${priceInCents}, ${category}, ${description}, ${image_url}, ${status})`;
  } catch (error) {
    return {
      message: "Database Error: Failed to create product",
    };
  }
  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard/account");
  redirect("/dashboard/account");
}

export async function updateProduct(
  id: string,
  prevState: State,
  formData: FormData
) {
  const validatedFields = UpdateProduct.safeParse({
    artisan_id: formData.get("artisan_id"),
    title: formData.get("title"),
    price: formData.get("price"),
    category: formData.get("category"),
    description: formData.get("description"),
    image_url: formData.get("image_url"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Invoice.",
    };
  }

  const { artisan_id, title, price, category, description, image_url, status } =
    validatedFields.data;

  const priceInCents = price * 100;

  try {
    await sql`
      UPDATE items
      SET artisan_id = ${artisan_id}, title = ${title}, price = ${priceInCents}, category = ${category},
      description = ${description}, image_url = ${image_url}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Product." };
  }

  revalidatePath("/dashboard/account");
  redirect("/dashboard/account");
}

export async function deleteProduct(id: string) {
  try {
    await sql`DELETE FROM items WHERE id = ${id}`;
    window.location.reload();
    revalidatePath("/dashboard/account");
    return { message: "Deleted Product." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Product." };
  }
}

const ReviewSchema = z.object({
  id: z.string().uuid(),
  text: z.string(),
  rate: z.number().min(1).max(5),
});

export async function updateReview(data: any) {
  noStore();
  try {
    const parsedData = ReviewSchema.parse(JSON.parse(data));
    const { id, text, rate } = parsedData;
    console.log(`line sql ${id}, ${text}, ${rate}`);
    await sql`
      UPDATE reviews
      SET text = ${text}, rate = ${rate}
      WHERE id = ${id}
    `;
    return { message: "Updated successfully." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        message: "Invalid Data",
        details: error.errors,
      };
    }
    return { message: "Review update failed." };
  }
}

export async function deleteReview(id: string) {
  try {
    await sql`DELETE FROM reviews WHERE reviews.id = ${id}`;
    console.log("success");
    return { message: "Deleted Product." };
  } catch (error) {
    console.log("royal failure");
    return { message: "Database Error: Failed to Delete Product." };
  }
}
