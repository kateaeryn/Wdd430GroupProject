import { Metadata } from "next";
import ProductGrid from "@/app/ui/dashboard/products";
import { fetchItemsByPriceOrSearch } from "@/app/lib/data";
import Search from "@/app/ui/dashboard/search";
import { Suspense } from "react";
import { ProductsSkeleton } from "@/app/ui/skeletons";
import FilterByPrice from "@/app/ui/dashboard/filterByPrice";

export const metadata: Metadata = {
  title: "All Products",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    price?: string;
  };
}) {
  const query = searchParams?.query || "";
  const price = searchParams?.price || "";

  const items = await fetchItemsByPriceOrSearch(query, price);

  return (
    <>
      <div className="flex flex-col space-y-10 ">
        <Search placeholder="Search the Haven..." />
        <FilterByPrice placeholder="Filter" />
        <h1 className="text-brown text-5xl text-center">All Products</h1>
        <div className="flex flex-row flex-wrap justify-evenly">
          <Suspense key={query} fallback={<ProductsSkeleton />}>
            <ProductGrid items={items} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
