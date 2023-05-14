import { ProductCard,Input } from "@components";

export default function Home() {
  return (
    <div className='grid md:grid-cols-3 gap-8'>
      <div className='h-96'>
        <Input color='primary' />
        <Input color='accent' />
        <Input color='black' />
        <Input color='green' />
        <Input color='gold' />
      </div>
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
