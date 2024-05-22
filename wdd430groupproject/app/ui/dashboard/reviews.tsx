import { getCustomerReviews }  from "@/app/lib/data"
import moment from 'moment';


export default async function ReviewGrid({params,
}: {
  params: { id: string };
    }) {
    const id = params as unknown as string;
    const reviews = await getCustomerReviews(id);
    return (
        <>
        {reviews.map((review) => {
            return (
                <div className="flex flex-col " key={review.id}>
                    <div className="flex flex-row justify-between">
                        <p className="text-3xl">{review.first_name + " " + review.last_name}</p>
                        <p>Rating: {review.rate} Stars</p>
                    </div>
                    <div className="text-xl">
                        {moment(review.date).format("MM/DD/YYYY")}
                    </div>
                    <p className="text-brown text-xl">{review.text}</p>
                </div>

            )

        })
    }
        
        </>
        
        

    )
}
