"use client";

import { usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function FilterByPrice() {
  const params = new URLSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = useDebouncedCallback((term) => {
    let value: string = "";
    if (term === "LowToHigh") {
      value = "LowToHigh";
      params.set("price", value);
    }
    if (term === "HighToLow") {
      value = "HighToLow";
      params.set("price", value);
    }
    if (term === "FilterByPrice") {
      params.delete("price");
    }

    replace(`${pathname}?${params.toString()}`);
  });

  return (
    <div className="flex ">
      <label hidden>Filter By Price</label>
      <select
        id="filter"
        name="filter"
        className="peer block w-3/8 cursor-pointer rounded-md border  border-gray-200 py-2 pl-5 text-xl outline-2 placeholder:text-darkBrown"
        defaultValue={"FilterByPrice"}
        onChange={(e) => {
          handleFilter(e.target.value);
        }}
      >
        <option value="FilterByPrice">Filter by Price</option>
        <option value="LowToHigh">Low To High</option>
        <option value="HighToLow">High To Low</option>
      </select>
    </div>
  );
}
