import { Metadata } from 'next';
import ArtistDetail from '@/app/ui/dashboard/bio';

 
export const metadata: Metadata = {
  title: 'Artist Bio',
};

export default function Page() {
  return (
    <>
 
  <ArtistDetail />
  
  
  </>)
  
}