'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
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
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="flex w-3/4 h-1/2 border border-gray-200 py-[9px] pl-10 text-2xl outline-2 placeholder:text-gray-500 self-end"
        placeholder={placeholder}
        // onChange={(e) => {
        //   handleSearch(e.target.value);
        // }}
        // defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-3/4 h-[25px] w-[25px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
