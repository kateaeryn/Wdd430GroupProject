import { PencilIcon } from "@heroicons/react/24/outline";
import { deleteReview } from "@/app/lib/actions";

export function DeleteReview({ id }: { id: string }) {
  const deleteReviewWithID = deleteReview.bind(null, id);
  return (
    <form action={deleteReviewWithID}>
      <button className="py-3 px-6 text-lg font-big text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
        Delete
      </button>
    </form>
  );
}

export function EditReview({ id }: { id: string }) {
  return (
    <button
      className={`bg-green text-tan text-opacity-99 text-xl font-bold py-4 px-2 rounded focus:outline-none focus:shadow-outline`}
    >
      <span className="sr-only">Edit</span>
      <PencilIcon className="w-6" />
    </button>
  );
}
