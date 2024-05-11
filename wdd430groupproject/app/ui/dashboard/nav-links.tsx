'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Featured Items', href: '/dashboard' },
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
            className={clsx('flex  grow items-center justify-center align-bottom gap-2 p-3 text-2xl font-serif font-medium hover:bg-beige hover:text-darkBrown md:flex-none md:justify-start md:p-2 ',
              {
                'bg-beige text-darkBrown': pathname === link.href,
              },
            )}
            >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
