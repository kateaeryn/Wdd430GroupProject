import { deleteProduct } from "@/app/lib/actions";
import Button from "../button";

export function DeleteProduct({ id }: { id: string }) {
  const deleteProductWithID = deleteProduct.bind(null, id);
  return (
    <form action={deleteProductWithID}>
      <Button>Delete Product</Button>
    </form>
  );
}
