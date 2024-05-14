'use client';

import { usePathname } from 'next/navigation';
import blankBox from '/public/images/blank-box.png';
import Image from 'next/image';
import Button from '@/app/ui/button';
// import Carousel from '@/app/ui/dashboard/carousel';


const links = [
    { title: 'Item 1', artist: 'Some Dude', href: '/dashboard/products/', price: "$$$", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", reviews: "This is so awesome, I love it so much." },
 
  
];


export default function ProductDetail() {
    const pathname = usePathname();
  return (
    <>
          {links.map((link) => {
        
        return (
          <div className="flex flex-col ">
                <h1 className="text-5xl text-brown">{link.title}</h1>
                <div className="flex flex-row justify-between">
                <h3 className="text-2xl text-brown">{link.artist}</h3>
                <p>Star Rating</p>

                </div>
                
            <Image className="md:h-[600px] md:w-[700px]" src={blankBox} alt="blank box"/>
            {/* <div className="flex flex-col items-center justify-center text-center">
              <Carousel data={Idata} />
            </div> */}
            
                <div className="flex flex-row justify-between">
                  <h3 className="text-brown">{link.price}</h3>
                <Button>Add to Cart</Button>  
                </div>
                
                <p className="text-xl text-wrap md:w-[700px]">{link.description}</p>
                <h2 className="text-brown mt-6">Reviews</h2>
                <p className="text-brown text-xl">{link.reviews}</p>
            </div>
        );
      })}
    </>
  );
}
