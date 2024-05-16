'use client';

import { usePathname } from 'next/navigation';
import person from '/public/images/person.jpg';
import Image from 'next/image';
import FeaturedLinks from "@/app/ui/dashboard/featured";



const links = [
    { name: "Some Dude", bio: "lorem ipsum why I am awesome and how I got to be this fantastical way." },
 
  
];


export default function ArtistDetail() {
    const pathname = usePathname();
  return (
    <>
          {links.map((link) => {
        
        return (
            <div className="flex flex-col" key={link.name}>
                
                <div className="md:flex md:flex-row md:justify-between">
                <h1 className="text-5xl text-brown ">{link.name}</h1>
                <p className="text-base md:self-center">Star Rating</p>
                </div>
                <div className="md:flex md:flex-row">
                <Image className="md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]" src={person} alt="person placeholder" />
                <div className="text-brown">
                <h3 className="md:ml-4">Artist Biography</h3>
                <p className="text-2xl text-brown md:text-xl md:mx-4">{link.bio}</p>
                </div>
                </div>              
                <h2 className="text-brown mt-6">Featured Creations</h2>
                <div className="flex flex-wrap flex-row justify-evenly space-x-4">
                {/*The below comment line is preventing an error between typescript and async/await*/}
              {/* @ts-expect-error Async Server Compnent*/}   
              <FeaturedLinks />
                </div>
            </div>
        );
      })}
    </>
  );
}
