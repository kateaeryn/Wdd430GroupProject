import { NextResponse } from "next/server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// Schema to validate registration
export const registrationSchema = z
  .object({
    registrationType: z.enum(["customer", "vendor"], {
      required_error: "You must choose a form.",
      invalid_type_error: "You must choose a form.",
    }),
    first_name: z
      .string()
      .min(1, "First name is required")
      .trim()
      .regex(/^[a-zA-Z]+$/, "First name must contain only letters"),
    last_name: z
      .string()
      .min(1, "Last name is required")
      .trim()
      .regex(/^[a-zA-Z]+$/, "Last name must contain only letters"),
    email: z.string().email(),
    image: z.string().url().optional(), // Make image optional
    password: z.string().min(5, "Minimum 10 characters"),
    confirmPassword: z.string(),
  })
  // Refine checks if passwords match
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TRegistrationSchema = z.infer<typeof registrationSchema>;

interface UserData {
  registrationType: "customer" | "vendor";
  first_name: string;
  last_name: string;
  email: string;
  image: string | null; // Allow null for image
  password: string;
  confirmPassword: string;
}

export async function processRegistration({
  registrationType,
  first_name,
  last_name,
  email,
  image,
  password,
}: UserData) {
  try {
    const values = [first_name, last_name, email, image, password];
    let insertQuery = "";

    if (registrationType === "customer") {
      insertQuery = `
        INSERT INTO users (first_name, last_name, email, image, password)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
    } else if (registrationType === "vendor") {
      insertQuery = `
        INSERT INTO artisans (first_name, last_name, email, image, password)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
    }

    console.log(
      `Success registration at ${registrationType === "customer" ? "users" : "artisans"}, values: ${values}`
    );
    // Execute your database query with the provided values (assuming you are using pg)
    // await client.query(insertQuery, values);
  } catch (error) {
    console.error("Postgre insertion error:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }

  revalidatePath("/dashboard/account");
  redirect("/dashboard/account");
}
