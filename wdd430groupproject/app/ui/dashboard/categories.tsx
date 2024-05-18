"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import homedecor from '@/public/images/homedecor.png';
import art from '@/public/images/art.png';
import textiles from '@/public/images/textiles.png';
import accessories from '@/public/images/accessories.png';

export default function CatLinks() {
  const pathname = usePathname();
  return (
    <>
      
      <div className="" >
            
            <Link
              href="/dashboard/category/all-products"
              className={clsx('',
                
              )}
            >
              <Image src={homedecor} alt='home decor' className="size-36 lg:size-48" height={500} width={500} />
             
            </Link>
      </div>
      <div className="" >

            
            <Link
              href="/dashboard/categories/all-products"
              className={clsx('',
                
              )}
            >
              <Image src={art} alt='art' className="size-36 lg:size-48" height={500} width={500} />
            </Link>
      </div>
      <div className="">

            
            <Link
              href="/dashboard/categories/all-products"
              className={clsx('',
                
              )}
            >
              <Image src={textiles} alt='textiles' className="size-36 lg:size-48" height={500} width={500} />
              
            </Link>
      </div>
      <div className="" >

            
            <Link
              
              href="/dashboard/categories/all-products"
              className={clsx('',
                
              )}
            >
              <Image src={accessories} alt='accessories' className="size-36 lg:size-48" height={500} width={500} />
              
            </Link>
      </div>

        
    </>
       
   
  );
      
}
