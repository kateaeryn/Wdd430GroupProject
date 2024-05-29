import EditReviewForm from '@/app/ui/edit-review-form';
import { Metadata } from 'next';
import { getReviewBasics } from '@/app/lib/data';


export const metadata: Metadata = {
  title: "Edit Review",
};

export default async function EditReviewPage({params}: {params: {id:string}}) {
  const id = params.id;
  const [review] = await Promise.all([getReviewBasics(id)]); 
  console.log(review);
  return (
    <>
      <div className="flex flex-col grow max-w-4xl  text-center">
        <h1>Edit Review</h1>

        <EditReviewForm review={review} />
      </div>
    </>
  );
}
