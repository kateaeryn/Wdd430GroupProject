import { Metadata } from 'next';
import  AddProductForm  from '@/app/ui/dashboard/product-form';
import { fetchArtisan } from '@/app/lib/data';

export const metadata: Metadata = {
    title: 'Add Products',
  };
  

export default async function Page() {
  const artisans = await fetchArtisan();
  
  return (
    <>
      <div className="flex flex-col grow max-w-4xl  text-center">
        <h1>Add Products</h1>
        
         {/*The below comment line is preventing an error between typescript and async/await*/}
        {/* @ts-expect-error Async Server Compnent*/}    
          <AddProductForm artisans={artisans} />
          
        










    </div>
    
    
    
    </>
  )
    ;
  }
  
   
  