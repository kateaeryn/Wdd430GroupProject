import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Handcrafted Haven",

  description: 'Your source for all crafty and artsy needs',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
    <div className="flex flex-col bg-tan bg-opacity-50 ">
     
      <div className="flex p-12 justify-center ">{children}</div>
     </div>
  );
}