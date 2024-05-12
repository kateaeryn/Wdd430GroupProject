'use client';


import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

//   const handleSearch = useDebouncedCallback((term) => {
//       console.log(`Searching...${term}`);
//     const params = new URLSearchParams(searchParams);
//     params.set('page', '1');
//       if (term) {
//         params.set('query', term);
//       } else {
//         params.delete('query');
//       }
//       replace(`${pathname}?${params.toString()}`);
    
//     }, 300);

  
  return (
    <div className="relative flex justify-center">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer flex w-5/6 h-3/4 border bg-tan border-brown text-3xl outline-2 placeholder:text-brown rounded-md p-2"
        placeholder={placeholder}
        // onChange={(e) => {
        //   handleSearch(e.target.value);
        // }}
        // defaultValue={searchParams.get('query')?.toString()}
      />
      
    </div>
  );
}
