import {ProductCard} from '@components'

const Centrifuge = () => {
  return (
    <div className="flex flex-col flex-center h-full">
    <h1 className="border-l-2 px-2 border-black mb-6">Centrifuge Page</h1>
    <div className="grid md:grid-cols-3 gap-4">
      <ProductCard color="primary"/>
      <ProductCard color="green"/>
      <ProductCard color="gold"/>
      <ProductCard color="accent"/>
    </div>
  </div>
  )
}

export default Centrifuge;