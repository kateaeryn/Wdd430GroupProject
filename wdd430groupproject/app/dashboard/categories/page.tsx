import { Metadata } from 'next';
import ProductGrid from '@/app/ui/dashboard/products';
import { Suspense } from "react";
import { ProductsSkeleton } from "@/app/ui/skeletons";
import { fetchFilteredItems } from '@/app/lib/data';
 
export const metadata: Metadata = {
  title: 'Products',
};
//category page needs to be keyed to take the category id or name
//or something to filter by category, so which ever category is clicked
//on the landing page brings up the right group of items
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const items = await fetchFilteredItems(query);
  return (
    <>
  <div className="flex flex-col  text-center space-y-10">
    <h1 className="text-brown text-6xl">Category ID</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly lg:space-x-6 xl:space-x-12">
        
           <Suspense key={query} fallback={<ProductsSkeleton />}>
          <ProductGrid items={items} />
          </Suspense>
        </div>    
      </div>
  
  
  
  </>)
  
}

