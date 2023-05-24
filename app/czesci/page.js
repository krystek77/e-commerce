import React from 'react'
import {SparePartCard} from '@components'

const SpareParts = () => {
  return (

    <div className="container mx-auto">
      <h1 className="">Części zamienne do przemysłowych urządzeń pralniczych</h1>
      <div className='flex'>
        <SparePartCard/>
        <SparePartCard/>
        <SparePartCard/>
        <SparePartCard/>
      </div>
    </div>

  )
}

export default SpareParts