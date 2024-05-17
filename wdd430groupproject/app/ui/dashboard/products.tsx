"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import blankBox from "/public/images/blank-box.png";
import Image from "next/image";
import { Item } from "@/app/lib/definitions";
import { fetchItems } from "@/app/lib/data";

export default function ProductGrid({ items }: { items: Item[] }) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => {
        return (
          <div className="flex md:flex-row justify-center" key={item.title}>
            <Link
              key={item.id}
              href={"/dashboard/products/" + item.id + "/detail"}
              className={clsx("", {
                "bg-brown text-brown": pathname === item.image_url,
              })}
            >
              <Image
                src={item.image_url}
                alt="Product Image"
                className="md:w-[300px] md:h-[250px] 2xl:w-[350px] 2xl:h-[300px]"
                height={300}
                width={350}
              />
              <p className="text-brown text-3xl pt-2 pb-10">{item.title}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}
