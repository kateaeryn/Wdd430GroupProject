import React from "react";
import Button from "@/app/ui/button";
import Link from "next/link";

interface Item {
	id: string;
	title: string;
	image_url: string;
}

interface ItemProps {
	items: Item[];
}

const FilteredItems: React.FC<ItemProps> = ({ items }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{items.map((item) => (
				<div
					key={item.id}
					className="card"
				>
					<img
						src={item.image_url}
						alt={item.title}
					/>
					<h3>{item.title}</h3>
					<Link href={`/dashboard/products/${item.id}/edit`}>
						<Button>Edit/Delete</Button>
					</Link>
				</div>
			))}
		</div>
	);
};

export default FilteredItems;

// import Link from 'next/link';

// import clsx from 'clsx';
// import blankBox from '/public/images/blank-box.png';
// import Image from 'next/image';
// import { fetchArtistItems } from '@/app/lib/data';

// export default async function FilteredProducts({params}: {params: {id: string}}) {

//   const id = params as unknown as string;
//   const items = await fetchArtistItems(id);

//   return (
//     <>
//           {items.map((link) => {

//         return (
//           <div className="" key={link.id}>

//             <Link
//             key={link.title}
//             href={link.href}
//             className={clsx(' text-brown',

//             )}
//             >

//             <p className=" text-2xl">{link.name}</p>
//           </Link>
//             </div>
//         );
//       })}
//     </>
//   );
// }
