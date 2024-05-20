import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { redirect } from 'next/navigation';

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
  registrationType: 'customer' | 'vendor';
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function processRegistration({
  registrationType,
  firstName,
  lastName,
  email,
  password,
}: UserData) {
  try {
    const insertQuery = `
      INSERT INTO users (registrationType, firstName, lastName, email, password)
      VALUES (${1}, ${2}, ${3}, ${4}, ${5})
      RETURNING *;
    `;
    const values = [registrationType, firstName, lastName, email, password];
    console.log(`Success registration, line 56 ${values}`);
  } catch (error) {
    console.error('Postgre insertion error:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
