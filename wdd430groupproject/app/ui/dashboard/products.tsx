'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import blankBox from '/public/images/blank-box.png';
import Image from 'next/image';

const links = [
    { name: 'Item 1', href: '/dashboard/products/' },
  {name: 'Item 2', href: '/dashboard/products/' },
  {
    name: 'Item 3',
    href: '/dashboard/products/'
    },
  
];

export default function ProductGrid() {
    const pathname = usePathname();
  return (
    <>
          {links.map((link) => {
        
        return (
          <div className="flex md:flex-row justify-center">
            
            <Link
            key={link.name}
            href={link.href}
            className={clsx('',
              {
                'bg-brown text-brown': pathname === link.href,
              },
            )}
            >
              <Image src={blankBox} alt='blank box' className="md:w-[300px] md:h-[250px] 2xl:w-[450px] 2xl:h-[400px]" height={400} width={450} />
            <p className="text-brown text-3xl">{link.name}</p>
          </Link>
            </div>
        );
      })}
    </>
  );
}
