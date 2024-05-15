import { Metadata } from 'next';
import FilteredProducts from '@/app/ui/dashboard/filtered';

export const metadata: Metadata = {
  title: 'User/Artist Account',
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col">        
          <h1 className="text-5xl leading-tight mb-6">Welcome person/Artist!</h1>
          <div className="flex flex-col">
          <h2>Your Products/Purchases</h2>
          <div className="flex flex-col mb-6">
            <FilteredProducts />
          </div>
          
         </div>
        <div className="flex flex-col ">
          <h2>Reviews</h2>
          <p className="text-xl">This is where the reviews can be</p>
        </div>

    </div>
    
    
    
    </>

  )
}