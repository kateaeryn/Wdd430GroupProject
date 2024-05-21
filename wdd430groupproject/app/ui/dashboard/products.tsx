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
                className="object-fill size-24 sm:size-96"
                height={4000}
                width={2250}
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
