import React from 'react'
import PropTypes from 'prop-types'

const Page = (params) => {
  return (
    <div className='flex justify-between items-center flex-wrap'>
      <div>Category(params): <b>{params.params.category[0]}</b></div>
      <div>:SearchParams: <b>{params.searchParams.type}</b></div>
    </div>
  );
}

Page.propTypes = {}

export default Page