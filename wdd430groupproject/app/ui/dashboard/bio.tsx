

import Image from 'next/image';
import { getSingleArtisan, fetchArtistItems } from '@/app/lib/data';
import Link from 'next/link';

export default async function ArtistDetail({params}: {params: {id: string}}) {
  const id = params as unknown as string;
  const details = await getSingleArtisan(id);
  const items = await fetchArtistItems(id);
  return (
    <>
          {details.map((link) => {
        
            return (
              <div className="flex flex-col" key={link.id}>
                
                <div className="md:flex md:flex-row md:justify-between">
                  <h1 className="text-5xl text-brown ">{link.first_name +" "+link.last_name}</h1>
                  
                </div>
                <div className="md:flex md:flex-row">
                  <Image className="object-scale-down md:size-96 lg:size-[36rem] xl:size-[40rem]" priority={true}  src={link.image_url} alt="Artist" height={3700}
                    width={3700}
                  sizes="(min-width: 2240px) calc(15.67vw + 170px), (min-width: 1280px) calc(2.64vw + 478px), (min-width: 1040px) 461px, (min-width: 780px) 307px, calc(100vw - 96px)"/>
                  <div className="text-brown">
                    <h2 className="md:ml-4">Biography</h2>
                    <p className="text-2xl text-brown md:text-xl md:mx-4">{link.story}</p>
                  </div>
                </div>
                <h2 className="text-brown mt-6">Featured Creations</h2>
                <div className="flex flex-wrap flex-row justify-evenly space-x-4">
                  {items.map((link) => {
                    return (
                      <div className="" key={link.id}>
                        <Link
                          key={link.id}
                          href={'/dashboard/products/' + link.id + '/detail'}
                          className="" >
                          <Image src={link.image_url} alt={link.id} priority={true} className="md:my-4 sm:size-44 md:size-60 xl:size-80 2xl:size-[24rem]" width={2250} height={4000}
                          sizes="(min-width: 1540px) 384px, (min-width: 1280px) 320px, (min-width: 780px) 240px, (min-width: 640px) 176px, calc(100vw - 96px)"/>
                          <p className=" text-2xl">{link.title}</p>
                        </Link>
                      </div>
                    );
                  }
                  )}
                </div>
                
              </div>
            );
          
      })}
    </>
  );
}
