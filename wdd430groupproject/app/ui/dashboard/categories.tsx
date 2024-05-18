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
          src={homeCategory[0].image_url}
          alt="Home Decor"
          className="sm:w-[250px] sm:h-[150px] md:w-[350px] md:h-[200px] lg:w-[400px] lg:h-[350px]"
          height={100}
          width={150}
        />
        <p className=" text-2xl">Home Decor</p>
      </Link>
      <Link key={"textiles"} href={`/dashboard/categories/textiles`}>
        <Image
          src={textilesCategory[1].image_url}
          alt="Textiles"
          className="sm:w-[250px] sm:h-[150px] md:w-[350px] md:h-[200px] lg:w-[400px] lg:h-[350px]"
          height={100}
          width={150}
        />
        <p className=" text-2xl">Textiles</p>
      </Link>
      <Link key={"art"} href={`/dashboard/categories/art`}>
        <Image
          src={artCategory[0].image_url}
          alt="Art"
          className="sm:w-[250px] sm:h-[150px] md:w-[350px] md:h-[200px] lg:w-[400px] lg:h-[350px]"
          height={100}
          width={150}
        />
        <p className=" text-2xl">Art</p>
      </Link>
      <Link key={"accessories"} href={`/dashboard/categories/accessories`}>
        <Image
          src={accessoriesCategory[1].image_url}
          alt="Accessories"
          className="sm:w-[250px] sm:h-[150px] md:w-[350px] md:h-[200px] lg:w-[400px] lg:h-[350px]"
          height={100}
          width={150}
        />
        <p className=" text-2xl">Accessories</p>
      </Link>

    </>
  );
}
