import {ProductCard} from '@components'

const Washer = () => {
  return (
    <div className="flex flex-col flex-center h-full">
    <h1 className="border-l-2 px-2 border-black mb-6">Washer Page</h1>
    <div className="grid md:grid-cols-3 gap-4">
      <ProductCard color="gold"/>
      <ProductCard color="accent"/>
      <ProductCard color="accent"/>
      <ProductCard color="accent"/>
    </div>
  </div>
  )
}

export default Washer;