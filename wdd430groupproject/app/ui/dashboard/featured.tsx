import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { getAllProductImages } from "@/app/lib/data";

export default async function FeaturedLinks() {
  const list = await getAllProductImages();
  const links = list.sort(() => Math.random() - 0.5);

  return (
    <>
      {links.slice(0, 3).map((link) => {
        return (
          <div className="" key={link.id}>
            <Link
              key={link.id}
<<<<<<< HEAD
              href={"/dashboard/products/" + link.id + "/detail"}
              className={clsx(" text-brown ")}
            >
              <Image
                src={link.image_url}
                alt={link.id}
                priority={true}
                className="md:my-4 sm:size-44 md:size-60 xl:size-80 2xl:size-[24rem]"
                width={2250}
                height={4000}
              />
              <p className=" text-2xl">{link.title}</p>
            </Link>
          </div>
=======
              href={'/dashboard/products/' + link.id + '/detail'}
              
              className={clsx(' text-brown ')}
            >
              <Image src={link.image_url} alt={link.id} sizes="(min-width: 1540px) 384px, (min-width: 1280px) 320px, (min-width: 780px) 240px, 176px" priority={true} className="md:my-4 sm:size-44 md:size-60 xl:size-80 2xl:size-[24rem]"  width={2250} height={4000} />
            <p className=" text-2xl">{link.title}</p>
          </Link>
            </div>
>>>>>>> 3c125f65fa556af29247e2fbdf308ab8ff05c54c
        );
      })}
    </>
  );
}
