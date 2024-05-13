import { Metadata } from 'next';
import ProductGrid from '@/app/ui/dashboard/products';


export const metadata: Metadata = {
  title: 'Art',
};

export default function Page() {
  return (
    <>
    <div className="flex flex-col  text-center space-y-10">
    <h1 className="text-brown text-6xl">Art</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly">
         <ProductGrid />
        </div>    
      </div>
    
    
    
    
    </>
    )
}

 