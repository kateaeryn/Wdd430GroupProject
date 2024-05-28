import EditReviewForm from '@/app/ui/edit-review-form';

export default async function PassReviewId(props: any) {
  const bruh = JSON.stringify(props.searchParams);
  const { ...bruh0 } = JSON.parse(bruh);
  return (
    <>
      {' '}
      <EditReviewForm bruh2={bruh0} />
    </>
  );
}
