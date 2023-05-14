import { ProductCard } from "@components";

export default function Home() {
  return (
    <div className='grid md:grid-cols-3 gap-8'>
      <ProductCard color='gold' />
      <ProductCard color='black' />
      <ProductCard color='primary' />
      <ProductCard color='accent' />
      <ProductCard color='black' />
      <ProductCard color='green' />
      <ProductCard color='gold' />
    </div>
  );
}
