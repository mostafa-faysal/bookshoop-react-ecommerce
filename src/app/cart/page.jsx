"use client";
import dynamic from 'next/dynamic';

const ShopingCart = dynamic(() => import('../../components/shopingCart/ShopingCart'), { ssr: false });

export default function Page() {
  return <ShopingCart />;
}