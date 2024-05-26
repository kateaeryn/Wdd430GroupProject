import { getSingleCustomerReview } from '@/app/lib/data';
import OStars from '@/app/ui/components/star-rating';

export default async function passReviewId(props: any) {
  let bruh3;
  let bruh = await getSingleCustomerReview(props.params.id);
  const { ...bruh2 } = bruh['0'];
  return (
    <form className="flex flex-col gap-y-2">
      <strong>Edit Review</strong>
      <strong>Review Date: {new Date(bruh2.date).toLocaleDateString()}</strong>
      <textarea
        className="w-[400px] h-[300px]"
        placeholder={bruh2.text}
      ></textarea>
      <hr />
      <label>Stars Rated</label>
      <OStars currentStar={Number(bruh2.rate)} />
      <button className="bg-blue-200 rounded-md border border-gray-200 disabled:bg-red-800 disabled:text-white disabled={false}">
        Submit
      </button>
      <button
        className="bg-red-500 rounded-md border border-black-800 disabled:bg-red-1000 disabled:text-white disabled={false}"
        type="button"
        onClick={bruh3}
      >
        Delete Review
      </button>
    </form>
  );
}
