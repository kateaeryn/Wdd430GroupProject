export function ProductsSkeleton() {
  return (
    <div className="flex flex-col space-y-10 ">
      <h1 className="text-brown text-5xl text-center">All Products</h1>
      <div className="flex flex-row flex-wrap justify-between sm:justify-center md:justify-evenly"></div>
    </div>
  );
}
