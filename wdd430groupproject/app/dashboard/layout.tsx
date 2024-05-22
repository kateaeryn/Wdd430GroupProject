import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
    <div className="flex flex-col bg-tan bg-opacity-50 ">
     
      <div className="flex p-12 justify-center ">{children}</div>
     </div>
  );
}