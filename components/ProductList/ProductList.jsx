import React from 'react'
import PropTypes from 'prop-types'

const ProductList = props => {
  return (
    <main className='py-4'>
        <div className='flex justify-between items-center border-b  py-4'>
            <div className='font-accent text-sm flex'>
                <span className='font-semibold'>znaleziono:</span>
                <span><b className='border border-primary-dark bg-primary text-white px-2 py-1 mx-2 rounded-md'>126</b> produktów</span>
            </div>
            <div>
                <span>sortuj</span>
                <select>
                    <option>A</option>
                </select>
            </div>
        </div>
    </main>
  )
}

ProductList.propTypes = {}

export default ProductList