import dynamic from 'next/dynamic';

const CheckOutOrder = dynamic(() => import('../../../components/checkOutOrder/CheckOutOrder'), { ssr: false });

export default function Page() {
  return <CheckOutOrder />;
}