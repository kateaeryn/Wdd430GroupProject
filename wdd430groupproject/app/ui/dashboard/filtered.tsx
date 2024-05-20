
import Link from 'next/link';

import clsx from 'clsx';
import blankBox from '/public/images/blank-box.png';
import Image from 'next/image';
import { fetchArtistItems } from '@/app/lib/data';


export default async function FilteredProducts({params}: {params: {id: string}}) {
 
  const id = params as unknown as string;
  const items = await fetchArtistItems(id);

  return (
    <>
          {items.map((link) => {
        
        return (
          <div className="" key={link.id}>
            
            <Link
            key={link.title}
            href={link.href}
            className={clsx(' text-brown',
             
            )}
            >
              
            <p className=" text-2xl">{link.name}</p>
          </Link>
            </div>
        );
      })}
    </>
  );
}
