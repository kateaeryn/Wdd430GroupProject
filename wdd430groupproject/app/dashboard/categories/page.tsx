import { Metadata } from 'next';
import ProductGrid from '@/app/ui/dashboard/products';

 
export const metadata: Metadata = {
  title: 'Products',
};

export default function Page() {
  return (
    <>
  <div className="flex flex-col  text-center space-y-10">
    <h1 className="text-brown text-6xl">Category ID</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly lg:space-x-6 xl:space-x-12">
        {/*The below comment line is preventing an error between typescript and async/await*/}
        {/* @ts-expect-error Async Server Compnent*/}    
          <ProductGrid />
        </div>    
      </div>
  
  
  
  </>)
  
}

