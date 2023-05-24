import React from 'react'
import PropTypes from 'prop-types'
import { PageDescription,ProductList } from '@components';


const Page = (params) => {
  return (
    <>
      <PageDescription title="Przemysłowe pralnicowirówki samoobsługowe" />
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-320/fr auto-rows-auto gap-8">
            <div></div>
            <ProductList />
          </div>
        </div>
      </section>
    </>
  );
}

Page.propTypes = {}

export default Page