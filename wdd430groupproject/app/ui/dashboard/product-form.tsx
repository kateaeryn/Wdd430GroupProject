'use client';

import { useFormState } from 'react-dom';
import { ArtisanList } from '@/app/lib/definitions';
import Link from 'next/link';
import  Button from '@/app/ui/button';
import { createProduct }  from '@/app/lib/actions';


export default function AddProductForm({ artisans }: { artisans: ArtisanList[] }) {
     const initialState:state = { message: null };
    
    const [ state, dispatch] = useFormState(createProduct, initialState);
  return (
    <form action={dispatch}>
      <div className=" rounded-md bg-tan p-4 md:p-6 text-darkBrown">
        {/* Artisan Name */}
        <div className="mb-4">
          <label htmlFor="artist" className="mb-2 block text-2xl">
            Choose Artist
          </label>
          <div className="relative">
            <select
              id="artisan_id"
              name="artisan_id"
              className="peer block w-full cursor-pointer rounded-md border  border-gray-200 py-2 pl-10 text-xl outline-2 placeholder:text-darkBrown"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Select an artist
              </option>
              {artisans.map((artist) => (
                <option key={artist.id} value={artist.id}>
                  {artist.name}
                </option>
              ))}
            </select>
            
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-2xl font-medium">
            Enter a Product Title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="string"
                placeholder="Enter Title"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-xl outline-2 placeholder:text-darkBrown"
                aria-describedby="customer-error"
              />
              
            </div>
          </div>
          
        </div>
        {/* Price */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-2xl font-medium">
            Enter a Price
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                type="number"
                step=".01"
                placeholder="Enter Price"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-xl outline-2 placeholder:text-darkBrown"
                aria-describedby="customer-error"
              />
              
            </div>
          </div>
          
        </div>
              {/* Category */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-2xl font-medium">
            Enter a Category
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="category"
                name="category"
                type="string"
                placeholder="Enter Category"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-xl outline-2 placeholder:text-darkBrown"
                aria-describedby="customer-error"
              />
              
            </div>
          </div>
          
        </div>
              {/* Description */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-2xl font-medium">
            Enter a Description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="description"
                name="description"
                placeholder="Enter item description"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-xl outline-2 placeholder:text-darkBrown"
                aria-describedby="customer-error"
              />
              
            </div>
          </div>
          
        </div>
              {/* Image */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-2xl font-medium">
            Enter a URL for the image
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image_url"
                name="image_url"
                type="string"
                placeholder="Enter url"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-xl outline-2 placeholder:text-darkBrown"
                aria-describedby="customer-error"
              />
              
            </div>
          </div>
          
        </div>

        {/*  Status */}
        <fieldset>
          <legend className="mb-2 block text-2xl font-medium">
            Set the status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4 justify-evenly">
              <div className="flex items-center">
                <input
                  id="available"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="available"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-tan bg-opacity-50 px-3 py-1.5 text-xl  text-gray-600"
                >Available
                  
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="unavailable"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="unavailable"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-tan bg-opacity-50 px-3 py-1.5 text-xl  text-gray-600"
                >Unavailable
                 
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-evenly gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-green px-6  py-2 text-xl text-tan transition-colors self-center hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Product</Button>
      </div>
    </form>
  );
}
