import { Metadata } from "next";
import ProductGrid from "@/app/ui/dashboard/products";
import { filteredCategory } from "@/app/lib/data";
import Search from "@/app/ui/dashboard/search";
import { Suspense } from "react";
import FilterByPrice from "@/app/ui/dashboard/filterByPrice";

export const metadata: Metadata = {
  title: "Category",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams?: {
    query?: string;
    price?: string;
  };
}) {
  const category = params.category;
  const price = searchParams?.price || "";
  const query = searchParams?.query || "";
  const items = await filteredCategory(category, query, price);
  let title = "";

  switch (category) {
    case "decor":
      title = "Home Decor";
      break;
    case "textiles":
      title = "Textiles";
      break;
    case "accessories":
      title = "Accessories";
      break;
    case "art":
      title = "Art";
      break;
    default:
      title = "Products";
  }

  return (
    <>
      <div className="flex flex-col space-y-10 ">
        <Search placeholder="Search the Haven..." />
        <FilterByPrice />
        <h1 className="text-brown text-5xl text-center">{title}</h1>
        <div className="flex flex-row flex-wrap justify-evenly 2xl:gap-6">
          <Suspense key={query} fallback={<div>Loading...</div>}>
            <ProductGrid items={items} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
