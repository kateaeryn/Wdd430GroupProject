'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import blankBox from '/public/images/blank-box.png';
import Image from 'next/image';

const links = [
    { name: 'Item 1', href: '/' },
  {name: 'Item 2', href: '/' },
  {
    name: 'Item 3',
    href: '/'
    },
  
];

export default function FeaturedLinks() {
    const pathname = usePathname();
  return (
    <>
          {links.map((link) => {
        
        return (
          <div className="">
            
            <Link
            key={link.name}
            href={link.href}
            className={clsx(' text-brown',
              {
                'bg-brown text-beige': pathname === link.href,
              },
            )}
            >
              <Image src={blankBox} alt='blank box' className="md:w-[250px] md:h-[200px] lg:w-[350px] lg:h-[300px] lg:mb-8 mt-3" height={150} width={150} />
            <p className=" text-2xl">{link.name}</p>
          </Link>
            </div>
        );
      })}
    </>
  );
}
