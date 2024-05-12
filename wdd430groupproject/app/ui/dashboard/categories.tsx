'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import blankBox from '/public/images/blank-box.png';
import Image from 'next/image';

const links = [
    { name: 'Home Decor', href: '/dashboard/categories/decor' },
  {name: 'Textiles', href: '/dashboard/categories/textiles' },
  {
    name: 'Art',
    href: '/dashboard/categories/art'
    },
  {name: 'Accessories', href: '/dashboard/categories/accessories' },
];

export default function CatLinks() {
    const pathname = usePathname();
  return (
    <>
          {links.map((link) => {
        
        return (
          <div className="">
            
            <Link
            key={link.name}
            href={link.href}
            className={clsx('',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
            >
              <Image src={blankBox} alt='blank box' height={100} width={150} />
            <p className=" text-2xl">{link.name}</p>
          </Link>
            </div>
        );
      })}
    </>
  );
}
