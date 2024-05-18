import { Metadata } from 'next';
import FilteredProducts from '@/app/ui/dashboard/filtered';
import  Button  from '@/app/ui/button';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'User/Artist Account',
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full">        
          <h1 className="text-5xl leading-tight mb-6">Welcome person/Artist!</h1>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {/*Need to add condition of who is logged in to decide if product add button is shown */}
          <Link href="/dashboard/products/add">
          <Button>Add Products</Button>
        </Link>
        <div className="flex flex-col">
          <h2>Your Products/Purchases</h2>
          <div className="flex flex-col mb-6">
            <FilteredProducts />
          </div>
          
         </div></div>  
        <div className="flex flex-col ">
          <h2>Reviews</h2>
          <p className="text-xl">This is where the reviews can be</p>
        </div>

    </div>
    
    
    
    </>

  )
}