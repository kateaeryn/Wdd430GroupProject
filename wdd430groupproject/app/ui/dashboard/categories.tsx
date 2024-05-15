"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import blankBox from "/public/images/blank-box.png";
import Image from "next/image";

const links = [
  { name: "Home Decor", href: "/dashboard/categories/decor" },
  { name: "Textiles", href: "/dashboard/categories/textiles" },
  {
    name: "Art",
    href: "/dashboard/categories/art",
  },
  { name: "Accessories", href: "/dashboard/categories/accessories" },
];

export default function CatLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
<<<<<<< HEAD
<<<<<<< HEAD
          <div key={link.name} className={"categories-home"}>
            <Link
              key={link.name}
              href={link.href}
              className={clsx("category-card", {
                "bg-sky-100 text-blue-600": pathname === link.href,
              })}
            >
              <Image src={blankBox} alt="blank box" height={100} width={150} />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </div>
=======
          <div className="">
=======
          <div className="" key={link.name}>
>>>>>>> 9beedc2e9eafb23b329b9b183ea31932586d12ac
            
            <Link
            key={link.name}
            href={link.href}
            className={clsx('',
              {
                'bg-brown text-beige': pathname === link.href,
              },
            )}
            >
              <Image src={blankBox} alt='blank box' className="sm:w-[250px] sm:h-[150px] md:w-[350px] md:h-[200px] lg:w-[400px] lg:h-[350px]" height={100} width={150} />
            <p className=" text-2xl">{link.name}</p>
          </Link>
            </div>
>>>>>>> 6dec4fb4305712cafe0b5611fff3fdaaee19aa52
        );
      })}
    </>
  );
}
