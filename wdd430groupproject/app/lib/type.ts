import { NextResponse } from 'next/server';
import { z } from 'zod';
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// Schema to validate registration
export const registrationSchema = z
  .object({
    registrationType: z.enum(['customer', 'vendor'], {
      required_error: 'You must choose a form.',
      invalid_type_error: 'You must choose a form.',
    }),
    firstName: z
      .string()
      .min(1, 'First name is required')
      .trim()
      .regex(/^[a-zA-Z]+$/, 'First name must contain only letters'),
    lastName: z
      .string()
      .min(1, 'Last name is required')
      .trim()
      .regex(/^[a-zA-Z]+$/, 'Last name must contain only letters'),
    email: z.string().email(),
    image: z.string().url(),
    password: z.string().min(5, 'Minimum 10 characters'),
    confirmPassword: z.string(),
  })
  // Refine checks if passwords match
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type TRegistrationSchema = z.infer<typeof registrationSchema>;

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  password: string;
  registrationType: 'customer' | 'vendor';
}

export async function processRegistration({
  registrationType,
  firstName,
  lastName,
  email,
  image,
  password,
}: UserData) {
  try {
    if (registrationType === 'customer') {
      const insertQuery = `
        INSERT INTO users (firstName, lastName, email, image, password)
        VALUES (${1}, ${2}, ${3}, ${4}, ${5})
        RETURNING *;
      `;
      const values = [firstName, lastName, email, image, password];
      console.log(`Success registration at users, line 59 ${values}`);
    } else if (registrationType === 'vendor') {
      const insertQuery = `
      INSERT INTO artisans (firstName, lastName, email, image, password)
      VALUES (${1}, ${2}, ${3}, ${4}, ${5})
      RETURNING *;
    `;
      const values = [firstName, lastName, email, image, password];
      console.log(`Success registration at artisans, line 67 ${values}`);
    }
  } catch (error) {
    console.error('Postgre insertion error:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }

  revalidatePath("/dashboard/account");
  redirect("/dashboard/account");
}
