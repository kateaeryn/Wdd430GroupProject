import ProductGrid from '@/app/ui/dashboard/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Decor',
};

export default function Page() {
  return (
    <>
    <div className="flex flex-col  text-center space-y-10">
    <h1 className="text-brown text-6xl">Home Decor</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly">
         <ProductGrid />
        </div>    
      </div>
      </>
  );
}

 


