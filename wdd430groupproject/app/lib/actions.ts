'use server';

import { sql } from '@vercel/postgres';
import z from 'zod';
import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';

// export async function authenticate(
//     prevState: string | undefined,
//     formData: FormData,
//   ) {
//     try {
//       await signIn('credentials', Object.fromEntries(formData));
//     } catch (error) {
//       if ((error as Error).message.includes('CredentialsSignin')) {
//         return 'CredentialsSignin';
//       }
//       throw error;
//     }
// }
  
const newProduct = z.object({
    id: z.string(),
    artisan_id: z.string(),
    title: z.string(),
    price: z.number(),
    category: z.string(),
    description: z.string(),
    image_url: z.string(),
    status: z.string()
});

export type State = {
    errors?: {
        artisan_id?: string[] | "",
        title?: string[] | "",
        price?: number[] | 0,
        category?: string[] | "",
        description?: string[] | "",
        image_url?: string[] | "",
        status?: string[] | "",
    };
    message?: string | null;
}
export async function createProduct(formData: FormData) {
    console.log(formData);
    const validatedFields = newProduct.safeParse({
        artisan_id: formData.get('artisan_id'),
        title: formData.get('title'),
        price: formData.get('price'),
        category: formData.get('category'),
        description: formData.get('description'),
        image_url: formData.get('image_url'),
        status: formData.get('status')
        
    });
   
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Product.'
        };
    }
    const { artisan_id, title, price, category, description, image_url, status } = validatedFields.data;
    
    try {
    await sql`
    INSERT INTO items (artisan_id, title, price, category, description, image_url, status)
    VALUES (${artisan_id}, ${title}, ${price}, ${category}, ${description}, ${image_url}, ${status})`;
    } catch (error) {
        return {
            message: 'Database Error: Failed to create product'
        };
    }
        
    redirect('/dashboard/account');
    
}
