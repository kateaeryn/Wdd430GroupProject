

import Link from "next/link";
// import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { ArtisanGrid } from "@/app/lib/definitions";


export default function ArtistGrid({ artisans }: { artisans: ArtisanGrid[] }) {
//   const pathname = usePathname();
  
  return (
    <>
      {artisans.map((artist) => {
        return (
          <div className="flex  " key={artist.id}>
            <Link
              key={artist.id}
              href={"/dashboard/artistBio/" + artist.id}
              className={clsx("", {
                
              })}
            >
              <Image
                src={artist.image_url}
                alt="Artist Image"
                className=" object-scale-down size-32 sm:size-40 md:size-56 lg:size-72 xl:size-96"
                height={720}
                width={1280}
                sizes="(min-width: 1540px) 400px, (min-width: 1280px) 384px, (min-width: 1040px) 288px, (min-width: 780px) 224px, (min-width: 640px) 160px, 128px"
              />
              <p className="text-brown text-center text-lg pt-2 pb-10 sm:text-xl md:text-2xl xl:text-3xl">{artist.first_name + " " + artist.last_name}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}
