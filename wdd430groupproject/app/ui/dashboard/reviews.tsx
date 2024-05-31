"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "./modal";
import { DeleteReview, EditReview } from "./reviewButtons";
import { TrashIcon } from "@heroicons/react/24/outline";

export interface Review {
  id: string;
  user_id: string;
  item_id: string;
  text: string;
  date: string;
  rate: number;
  title: string;
}

interface ReviewProps {
  reviews: Review[];
}

const ReviewGrid: React.FC<ReviewProps> = ({ reviews }) => {
  
  const [open, setOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  useEffect(() => {
    if (deleteItem) {
      setOpen(false);
      window.location.reload();
    }
  }, [deleteItem]);
  return (
    <div className="flex flex-col gap-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="card border-solid border-brown border-2 rounded-md p-2"
        >
          <p className="-mb-3">{review.title}</p>
          <small className="text-xl">
            {new Date(review.date).toLocaleDateString()}
          </small>
          <div className="text-xl -mt-2">Rating: {review.rate}</div>
          <p className="text-xl">{review.text}</p>
          <div className="mt-2 flex justify-end gap-1">
            <Link
              href={{
                pathname: `/dashboard/products/${review.id}/detail/review/edit`,
                query: {
                  id: review.id,
                  user_id: review.user_id,
                  item_id: review.item_id,
                  text: review.text,
                  date: review.date,
                  rate: review.rate,
                  title: review.title,
                },
              }}
            >
              <EditReview id={review.id} />
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
                    <DeleteReview id={review.id} />
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

          {/* <Link
                        href={{
                            pathname: `/dashboard/products/${review.id}/detail/review/edit`,
                            query: {
                                id: review.id,
                                user_id: review.user_id,
                                item_id: review.item_id,
                                text: review.text,
                                date: review.date,
                                rate: review.rate,
                                title: review.title,
                            },
                        }}
                    >
                        <Button className="-mt-0.5 -mb-0.5">Edit/Delete</Button>
                    </Link> */}
        </div>
      ))}
    </div>
  );
};

export default ReviewGrid;
