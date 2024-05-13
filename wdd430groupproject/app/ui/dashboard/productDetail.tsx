'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import blankBox from '/public/images/blank-box.png';
import Image from 'next/image';

const links = [
    { title: 'Item 1', artist: 'Some Dude', href: '/dashboard/products/', price: "$$$", description: "Lorem Ipsum Lots of Words", reviews: "" },
 
  
];

export default function ProductDetail() {
    const pathname = usePathname();
  return (
    <>
          {links.map((link) => {
        
        return (
          <div className="flex flex-col">
                <h1>{link.title}</h1>
                <div className="flex flex-row justify-between">
                <h3>{link.artist}</h3>
                <p>Star Rating</p>

                </div>
                
            <Link
            key={link.title}
            href={link.href}
            className={clsx('',
              {
                'bg-brown text-brown': pathname === link.href,
              },
            )}
            >
              <Image src={blankBox} alt='blank box' className=" height={400} width={450}" />
                </Link>
                <div className="flex flex-row justify-between">
                  <h3>{link.price}</h3>
                <button className="rounded-md bg-green px-4 py-2 text-md text-tan">Add to Cart</button>  
                </div>
                
                <p>{link.description}</p>
                <h2>Reviews</h2>
                <p>{link.reviews}</p>
            </div>
        );
      })}
    </>
  );
}
