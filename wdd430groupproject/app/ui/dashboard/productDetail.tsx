

import Image from 'next/image';
import Button from '@/app/ui/button';
import { getProductDetail } from '@/app/lib/data';
import React from 'react';
import { useParams } from 'react-router-dom';

export default async function ProductDetail({params}: {params: {id: string}}) {
  //this looks weird because it is a workaround to let us use the passed parameter
  //as a string, even though it is already a string
  const id = params as unknown as string;
  console.log(params);
    const links = await getProductDetail(id);
  console.log(links);
  return (
    <>
          {links.map((link) => {
            
        return (
          <div className="flex flex-col " key={link.id}>
                <h1 className="text-5xl text-brown">{link.name}</h1>
                <div className="flex flex-row justify-between">
                <h3 className="text-2xl text-brown">{link.artisan}</h3>
                <p>Star Rating</p>

                </div>
                
            <Image className="md:h-[600px] md:w-[700px]" priority={true} src={link.image_url} alt="blank box" width={2250} height={4000} />
            
            
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
