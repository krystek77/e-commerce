import React from 'react'
import PropTypes from 'prop-types'

const NumberOfItems = ({number}) => {
  return (
    <div className='flex-shrink-0 border border-black-light bg-white p-1 w-8 h-8 rounded-full font-bold font-accent flex flex-center text-sm'>{number}</div>
  )
}

NumberOfItems.propTypes = {
    number:PropTypes.number
}
NumberOfItems.defaultProps = {
    number:8
}

export default NumberOfItems