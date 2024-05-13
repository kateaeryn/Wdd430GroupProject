import { Metadata } from 'next';
import ProductDetail from '@/app/ui/dashboard/productDetail';


export const metadata: Metadata = {
  title: 'Add Product',
};

export default function Page() {
  return (
    <>
  
<ProductDetail />

</>
)
}