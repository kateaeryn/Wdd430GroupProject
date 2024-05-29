"use client";
import { ReviewForm } from '@/app/lib/definitions';
import { updateReview } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import Button from "@/app/ui/button";

export default function EditReviewForm({ review }: { review: ReviewForm }) {
  
const initialState = { message: "", errors: {} };
  const updateProductWithId = updateReview.bind(null, review.id);
  const [state, dispatch] = useFormState(updateProductWithId, initialState);
  console.log(review);

  const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    ({ ...review, rate: parseInt(event.target.value) });
  };

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-tan p4 md:p-6 text-darkBrown">
        {/*review editing form */}
        <label htmlFor="text" className="mb-2 block text-2xl">
         {review.title}
      </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <textarea 
              id="text"
              name="text"
              placeholder="Review Text"
              defaultValue={review.text}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-xl outline-2 placeholder:text-darkBrown"
              aria-describedby="text-error"
            />
            <div id="text-error" aria-live="polite" aria-atomic="true">
              {state.errors?.text &&
                state.errors.text.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                </p>

              ))}
            </div>
          </div>
      </div>
        <label htmlFor="rate">
          Rating</label>      
        <div className="relative mt-2 rounded-md">
          <div className="relative">
             <input
          type="number"
          id="rate"
          min={1}
          max={5}
              value={String(review.rate)}
              onChange={handleRateChange}
          className="shadow appearance-none border rounded w-10 min-w-16 py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
        />{' '}
          </div>
          <div id="rate-error" aria-live="polite" aria-atomic="true">
            {state.errors?.rate &&
              state.errors.rate.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
              </p>
            ))}
          </div>
        </div>
 <div className="mt-6 flex justify-evenly gap-4">
        <Link
          href="/dashboard/account"
          className="flex h-10 items-center rounded-lg bg-green px-6  py-2 text-xl text-tan transition-colors self-center hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Update Review</Button>
      </div>

      </div>


  </form>
)
}