'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Featured Items', href: '/dashboard/products' },
  { name: 'Home Decor', href: '/dashboard/categories/decor' },
  { name: 'Art', href: '/dashboard/categories/art' },
  { name: 'Textiles', href: '/dashboard/categories/textiles' },
    { name: 'Accessories', href: '/dashboard/categories/accessories' },
  {name: 'Our Story', href: '/dashboard/story'},
  
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('flex grow h-full items-center justify-center align-bottom gap-2 p-3 text-brown text-xl font-serif font-medium hover:bg-brown hover:text-beige hover:rounded-md ',
              {
                'bg-brown text-beige rounded-t-md': pathname === link.href,
              },
            )}
            >
            <p className="font-serif text-md">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
