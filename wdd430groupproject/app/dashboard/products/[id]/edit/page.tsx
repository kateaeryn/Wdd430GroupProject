import { Metadata } from "next";
import EditProductForm from "@/app/ui/dashboard/edit-product-form";
import { fetchArtisan, fetchProductByID } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Edit Product",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [product, artisans] = await Promise.all([
    fetchProductByID(id),
    fetchArtisan(),
  ]);

  return (
    <>
      <div className="flex flex-col grow max-w-4xl  text-center">
        <h1>Edit Product</h1>

        <EditProductForm product={product} artisans={artisans} />
      </div>
    </>
  );
}
