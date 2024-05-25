"use client";
import React, { useEffect, useState } from "react";
import Modal from "./modal";
import Link from "next/link";
import Image from "next/image";
import { DeleteProduct, EditProduct } from "./deleteEditButtons";
import { TrashIcon } from "@heroicons/react/24/outline";

interface Item {
  id: string;
  title: string;
  image_url: string;
}

interface ItemProps {
  items: Item[];
}

const FilteredItems: React.FC<ItemProps> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  useEffect(() => {
    if (deleteItem) {
      setOpen(false);
      window.location.reload();
    }
  }, [deleteItem]);

  return (
    <div className="flex flex-wrap gap-4 justify-evenly">
      {items.map((item) => (
        <div
          key={item.id}
          className=" flex flex-col text-center justify-center"
        >
          <Link
            key={item.id}
            href={"/dashboard/products/" + item.id + "/detail"}
          >
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
          <div className="flow-root">
            <p className="text-brown text-lg pt-2 pb-10 sm:text-xl md:text-2xl xl:text-3xl float-left">
              {item.title}
            </p>
            <div className="mt-2 flex justify-end gap-1">
              <Link href={`/dashboard/products/${item.id}/edit`}>
                <EditProduct id={item.id} />
              </Link>

              <button
                className={`bg-green text-tan text-opacity-99 text-xl font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline`}
                onClick={() => setOpen(true)}
              >
                <TrashIcon className="w-6" />
              </button>

              <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-56">
                  <div className="mx-auto my-4 w-48">
                    <h3 className="text-lg font-black text-gray-800">
                      Confirm Delete
                    </h3>
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this item?
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      className="btn btn-danger w-full"
                      onClick={() => setDeleteItem(true)}
                    >
                      <DeleteProduct id={item.id} />
                    </button>
                    <button
                      className="btn btn-light w-full"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredItems;
