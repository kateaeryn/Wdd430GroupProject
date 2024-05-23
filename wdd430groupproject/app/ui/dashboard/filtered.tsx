import React from "react";
import Button from "@/app/ui/button";
import Link from "next/link";
import Image from 'next/image';

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
		<div className="flex flex-wrap gap-4 justify-evenly">
			{items.map((item) => (
				<div
					key={item.id}
					className=" flex flex-col text-center justify-center"
				>
					<Link key={item.id} href={'/dashboard/products/'+item.id+'/detail'}>
						<Image
							className="object-fill size-44 sm:size-48 md:size-80 lg:size-96"
						src={item.image_url}
							alt={item.title}
							width={640}
							height={640}
							sizes="(min-width: 1040px) 384px, (min-width: 780px) 320px, (min-width: 640px) 192px, 144px"
							priority={true}
						/>
					</Link>
					
					<p className="text-2xl">{item.title}</p>
					<Link href={`/dashboard/products/${item.id}/edit`}>
						<Button >Edit/Delete</Button>
					</Link>
				</div>
			))}
		</div>
	);
};

export default FilteredItems;

