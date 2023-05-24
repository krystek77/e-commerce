import React from 'react'
import PropTypes from 'prop-types'
import {SortBy, ProductCard} from '@components'

const ProductList = props => {
  return (
    <main className='py-4'>
        <div className='flex justify-between items-center border-b  py-4'>
            <div className='font-accent text-sm flex'>
                <span className='font-semibold'>znaleziono:</span>
                <span><b className='border border-primary-dark bg-primary text-white px-2 py-1 mx-2 rounded-md'>126</b> produktów</span>
            </div>
            <SortBy/>
        </div>
        <div className='p-12 flex'>
          <ProductCard/>
          <ProductCard/>
        </div>
    </main>
  )
}

ProductList.propTypes = {}

export default ProductList