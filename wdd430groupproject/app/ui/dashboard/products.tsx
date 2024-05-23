"use client";

import Link from "next/link";
import { formatCurrency } from "@/app/lib/utils";
import clsx from "clsx";
import Image from "next/image";
import { Item } from "@/app/lib/definitions";

export default function ProductGrid({ items }: { items: Item[] }) {
  return (
    <>
      {items.map((item) => {
        return (
          <div className="flex  " key={item.id}>
            <Link
              key={item.id}
              href={"/dashboard/products/" + item.id + "/detail"}
              className={clsx("", {})}
            >
              <Image
                src={item.image_url}
                alt="Product Image"
                className="object-fill size-36 sm:size-48 md:size-80 lg:size-96"
                height={4000}
                width={2250}
                sizes="(min-width: 1040px) 384px, (min-width: 780px) 320px, (min-width: 640px) 192px, 144px"
                priority={true}
              />
              <div className="flow-root">
                <p className="text-brown text-lg pt-2 pb-10 sm:text-xl md:text-2xl xl:text-3xl float-left">
                  {item.title}
                </p>
                <p className="text-brown text-lg pt-2 pb-10 sm:text-xl md:text-2xl xl:text-3xl float-right">
                  {formatCurrency(item.price)}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
