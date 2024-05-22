import Link from "next/link";
import homedecor from '@/public/images/homedecor.png';
import art from '@/public/images/art.png';
import textiles from '@/public/images/textiles.png';
import accessories from '@/public/images/accessories.png';
import Image from "next/image";
import { fetchCategory } from "@/app/lib/data";

export default async function CatLinks() {
  const homeCategory = await fetchCategory("decor");
  const textilesCategory = await fetchCategory("textiles");
  const artCategory = await fetchCategory("art");
  const accessoriesCategory = await fetchCategory("accessories");

  return (
    <>

      <Link
        key={"home"}
        href={`/dashboard/categories/${homeCategory[0].category}`}
      >
        <Image
          src={homedecor}
          alt="Home Decor"
          className="object-scale-down size-40 sm:size-60 -my-8 xl:size-72 2xl:size-96"
          sizes="(min-width: 1540px) 384px, (min-width: 1280px) 288px, (min-width: 640px) 240px, 160px"
          
        />
        
      </Link>
      <Link key={"textiles"} href={`/dashboard/categories/${textilesCategory[0].category}`}>
        <Image
          src={textiles}
          alt="Textiles"
          className="object-scale-down size-40 sm:size-60 -my-8 xl:size-72 2xl:size-96"
          sizes="(min-width: 1540px) 384px, (min-width: 1280px) 288px, (min-width: 640px) 240px, 160px"
          
        />
       
      </Link>
      <Link key={"art"} href={`/dashboard/categories/${artCategory[0].category}`}>
        <Image
          src={art}
          alt="Art"
          className="object-scale-down size-40 sm:size-60 -my-8 xl:size-72 2xl:size-96"
          sizes="(min-width: 1540px) 384px, (min-width: 1280px) 288px, (min-width: 640px) 240px, 160px"
          
        />
        
      </Link>
      <Link key={"accessories"} href={`/dashboard/categories/${accessoriesCategory[0].category}`}>
        <Image
          src={accessories}
          alt="Accessories"
          className="object-scale-down size-40 sm:size-60 -my-8 xl:size-72 2xl:size-96"
          sizes="(min-width: 1540px) 384px, (min-width: 1280px) 288px, (min-width: 640px) 240px, 160px"
          
        />
        
      </Link>

    </>
  );
}
