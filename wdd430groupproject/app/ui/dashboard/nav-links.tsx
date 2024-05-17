"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/dashboard/categories/all-products" },
  { name: "Home Decor", href: "/dashboard/categories" },
  { name: "Art", href: "/dashboard/categories" },
  { name: "Textiles", href: "/dashboard/categories" },
  { name: "Accessories", href: "/dashboard/categories" },
  { name: "Our Story", href: "/dashboard/story" },
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
            className={clsx(
              "flex grow h-full items-center justify-center align-bottom gap-2 p-3 text-brown text-xl lg:text-2xl xl:text-3xl font-serif font-medium hover:bg-brown hover:text-beige hover:rounded-md ",
              {
                "bg-green bg-opacity-30 text-darkBrown rounded-t-md":
                  pathname === link.href,
              }
            )}
          >
            <p className="font-serif text-md">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
